import React, { useEffect, useState, useMemo } from "react";
import { Pencil, Trash2, Power, Phone } from "lucide-react";

// Composants séparés pour une meilleure maintenabilité
const CardItem = ({ item, columns, urlBaseImage, onEdit, onDelete, onToggleStatus, deleteConfirmMessage, toggleStatusConfirmMessage, handleApiCall }) => {
  return (
    <div className="col-xl-4 data-item">
      <div className="card p-6">
        <div className="card-body pt-5 pb-0">
          <div className="carousel-inner mt-n5">
            <div className="carousel-item active">
              <div className="d-flex align-items-center mb-5">
                {/* Image */}
                <div className="w-80px flex-shrink-0 me-2">
                  <div className="min-h-auto ms-n3 initialized" style={{ height: 100, minHeight: 93 }}>
                    <div className="apexcharts-canvas" style={{ width: 90, height: 93 }}>
                      {urlBaseImage && item.STR_TICBARECODE && (
                        <img src={urlBaseImage + item.STR_TICBARECODE} className="img-fluid" alt="Code barre" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Informations */}
                <div className="m-0">
                  <h6 className="fw-bold text-gray-800 fs-19">{item.STR_EVENAME}</h6>
                  <ClientInfo phone={item.STR_TICPHONE} />
                  <CardDetails item={item} columns={columns} />
                </div>
              </div>

              {/* Boutons d'action */}
              <ActionButtons 
                item={item}
                onEdit={onEdit}
                onDelete={onDelete}
                onToggleStatus={onToggleStatus}
                deleteConfirmMessage={deleteConfirmMessage}
                toggleStatusConfirmMessage={toggleStatusConfirmMessage}
                handleApiCall={handleApiCall}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClientInfo = ({ phone }) => (
  <div className="d-flex align-items-center">
    <div className="symbol symbol-30px symbol-circle me-3">
      <span className="symbol-label bg-success">
        <Phone size={10} className="text-white" />
      </span>
    </div>
    <div className="mb-2 mt-0">
      <span className="fw-semibold text-gray-500 d-block fs-8">Client</span>
      <a href="#" className="fw-bold text-gray-800 text-hover-primary fs-7">
        {phone || 'N/A'}
      </a>
    </div>
  </div>
);

const CardDetails = ({ item, columns }) => (
  <div className="d-flex d-grid gap-5">
    <div className="d-flex flex-column flex-shrink-0 me-4">
      {columns.map((column, colIndex) => {
        if (column.data !== 'STR_TICBARECODE' && column.data !== 'actions') {
          return (
            <div key={colIndex} className="d-flex flex-shrink-0 me-4 align-items-center">
              <span className="fw-semibold text-gray-600 fs-7 pb-1">{column.title} : </span>
              <span className="fw-bold text-gray-800 fs-20 lh-1 pb-1 ms-1">
                {item[column.data] || '-'}
              </span>
            </div>
          );
        }
        return null;
      })}
    </div>
  </div>
);

const ActionButtons = ({ 
  item, 
  onEdit, 
  onDelete, 
  onToggleStatus, 
  deleteConfirmMessage, 
  toggleStatusConfirmMessage, 
  handleApiCall 
}) => (
  <div className="m-0">
    <div className="d-flex gap-2 mt-4">
      {onEdit && (
        <button 
          onClick={() => onEdit(item.id)} 
          className="p-2 rounded bg-blue-50 hover:bg-blue-100 text-blue-600" 
          title="Modifier"
        >
          <Pencil size={10} />
        </button>
      )}
      
      {onDelete && (
        <button
          onClick={() => {
            if (window.confirm(deleteConfirmMessage(item.id))) {
              handleApiCall({
                mode: "delete",
                id: item.id,
                status: "delete"
              });
            }
          }}
          className="p-2 rounded bg-red-50 hover:bg-red-100 text-red-600"
          title="Supprimer"
        >
          <Trash2 size={10} />
        </button>
      )}
      
      {onToggleStatus && (
        <button
          onClick={() => {
            const newStatus = item.status === "enable" ? "disable" : "enable";
            if (window.confirm(toggleStatusConfirmMessage(item.id, newStatus))) {
              handleApiCall({
                mode: "updateStatus",
                id: item.id,
                status: newStatus
              });
            }
          }}
          className={`p-2 rounded ${
            item.status === "enable" 
              ? "bg-yellow-50 hover:bg-yellow-100 text-yellow-600" 
              : "bg-green-50 hover:bg-green-100 text-green-600"
          }`}
          title={item.status === "enable" ? "Désactiver" : "Activer"}
        >
          <Power size={10} />
        </button>
      )}
    </div>
  </div>
);

// Composants pour les contrôles de filtres et pagination
const SearchAndFilters = ({ itemsPerPage, onItemsPerPageChange, searchTerm, onSearchChange }) => {
  const itemsPerPageOptions = [
    { label: '4 par page', value: 4 },
    { label: '8 par page', value: 8 },
    { label: '12 par page', value: 12 },
    { label: '16 par page', value: 16 }
  ];

  return (
    <div className="d-flex justify-content-between align-items-center mb-5">
      <div className="text-gray-600 flex items-center gap-4">
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="form-select w-32"
        >
          {itemsPerPageOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="relative">
        <input
          type="search"
          placeholder="Rechercher..."
          className="form-control pl-10 pr-4 py-2"
          onChange={onSearchChange}
          value={searchTerm}
        />
      </div>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, totalItems, onPageChange }) => {
  if (totalPages <= 1) return null;
  
  return (
    <div className="d-flex justify-content-center gap-2 mt-4 align-items-center">
      <span>{totalItems} résultats trouvés</span>

      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="btn btn-secondary"
      >
        Précédent
      </button>
      
      <span className="d-flex align-items-center px-3">
        Page {currentPage} sur {totalPages}
      </span>
      
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="btn btn-secondary"
      >
        Suivant
      </button>
    </div>
  );
};

// Hook personnalisé pour gérer les filtres et la pagination
const useDataFiltering = (initialData, defaultItemsPerPage = 8) => {
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

  useEffect(() => {
    setData(initialData);
    applyFilters(initialData, searchTerm);
  }, [initialData]);

  const applyFilters = (dataToFilter, term) => {
    if (!term) {
      setFilteredData(dataToFilter);
      return;
    }

    const normalizedTerm = term.toLowerCase();
    const filtered = dataToFilter.filter(item => {
      return Object.values(item).some(value =>
        value ? String(value).toLowerCase().includes(normalizedTerm) : false
      );
    });

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    applyFilters(data, term);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return {
    filteredData,
    paginatedData,
    totalItems: filteredData.length,
    currentPage,
    setCurrentPage,
    searchTerm,
    handleSearch,
    itemsPerPage,
    handleItemsPerPageChange,
    totalPages
  };
};

// Composant principal
const GenericCardView = ({
  data,
  columns,
  tableId,
  onEdit,
  onDelete,
  onToggleStatus,
  deleteConfirmMessage,
  toggleStatusConfirmMessage,
  handleApiCall
}) => {
  const urlBaseImage = localStorage.getItem("urlBaseImage");
  
  const {
    paginatedData,
    totalItems,
    currentPage,
    setCurrentPage,
    searchTerm,
    handleSearch,
    itemsPerPage,
    handleItemsPerPageChange,
    totalPages
  } = useDataFiltering(data);

  return (
    <div className="flex flex-col gap-6">
      <SearchAndFilters 
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        searchTerm={searchTerm}
        onSearchChange={handleSearch}
      />

      <div className="row g-6">
        {paginatedData.map((item, index) => (
          <CardItem
            key={item.id || index}
            item={item}
            columns={columns}
            urlBaseImage={urlBaseImage}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleStatus={onToggleStatus}
            deleteConfirmMessage={deleteConfirmMessage}
            toggleStatusConfirmMessage={toggleStatusConfirmMessage}
            handleApiCall={handleApiCall}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default GenericCardView;