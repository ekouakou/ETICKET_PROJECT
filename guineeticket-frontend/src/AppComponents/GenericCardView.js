import React, { useEffect, useState } from "react";
import { Pencil, Trash2, Power, ChevronLeft, ChevronRight, Eye, Phone } from "lucide-react";
import EventTicket from './EventTicket';
import {
  Modal,
  Button,
  SelectPicker,
  Loader,
  ButtonToolbar,
  Divider,
} from "rsuite";

const GenericCardView = ({
  data,
  columns,
  tableId,
  onEdit,
  onView,
  onToggleStatus,
  deleteConfirmMessage,
  toggleStatusConfirmMessage,
  handleApiCall
}) => {
  const [filteredData, setFilteredData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [selectedTicket, setSelectedTicket] = useState(null); // Nouvel état pour l'élément sélectionné
  const [rows, setRows] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEntered = () => setRows(3);
  const urlBaseImage = localStorage.getItem("urlBaseImage");

  const itemsPerPageOptions = [
    { label: '4 par page', value: 4 },
    { label: '8 par page', value: 8 },
    { label: '12 par page', value: 12 },
    { label: '16 par page', value: 16 }
  ];

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = data.filter(item => {
      return Object.values(item).some(value =>
        value ? String(value).toLowerCase().includes(term) : false
      );
    });

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);



  return (
    <div className="flex flex-col gap-6 mb-5 pb-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="text-gray-600 flex items-center gap-4">
          <SelectPicker
            data={itemsPerPageOptions}
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            cleanable={false}
            searchable={false}
            className="w-32"
          />
        </div>
        <div className="relative">
          {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} /> */}
          <input
            type="search"
            placeholder="Rechercher..."
            className="form-control pl-10 pr-4 py-2"
            onChange={handleSearch}
            value={searchTerm}
          />
        </div>
      </div>

      <div className="row g-6">
        {currentData.map((item, index) => (
          <>
            <div className="col-xl-4 data-item">
              <div className="card p-6">

                <div className="card-body pt-5 pb-0">
                  <div className="carousel-inner mt-n5">
                    <div className="carousel-item active">
                      <div className="d-flex align-items-center mb-5">
                        <div className="w-80px flex-shrink-0 me-2">
                          <div className="min-h-auto ms-n3 initialized" id="kt_slider_widget_1_chart_2" style={{ height: 100, minHeight: 93 }} >
                            <div id="apexcharts0r3kxv7d" className="apexcharts-canvas apexcharts0r3kxv7d apexcharts-theme-" style={{ width: 90, height: 93 }} >
                              <img src={urlBaseImage + item.STR_TICBARECODE} className="img-fluid" />
                            </div>
                          </div>
                        </div>
                        <div className="m-0">
                          <h6 className="fw-bold text-gray-800 fs-19 text-theme">{item.STR_EVENAME}</h6>
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-30px symbol-circle me-3">
                              <span className="symbol-label bg-success">
                                <Phone size={10} className="ki-duotone ki-abstract-41 fs-5 text-white" />
                              </span>
                            </div>
                            <div className="mb-2 mt-0">
                              <span className="fw-semibold text-gray-500 d-block fs-8">
                                Client
                              </span>
                              <a href="#" className="fw-bold text-gray-800 text-hover-primary fs-7 text-theme" >
                                {item.STR_TICPHONE}
                              </a>
                            </div>
                          </div>
                          <div className="d-flex d-grid gap-5">
                            <div className="d-flex flex-column flex-shrink-0 me-4">

                              {columns.map((column, colIndex) => {
                                if (column.data !== 'STR_TICBARECODE' && column.data !== 'actions') {
                                  return (
                                    <div className="d-flex flex-shrink-0 me-4 align-items-center">
                                      <span className="fw-semibold text-gray-600 fs-7 pb-1 text-theme">{column.title} : </span>
                                      <span className="fw-bold text-gray-800 fs-20 lh-1 pb-1 ms-1 text-theme">
                                        {item[column.data] || '-'}
                                      </span>
                                    </div>
                                  );
                                }
                                return null;
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="m-0">
                        <div className="d-flex gap-2 mt-4">
                          {/* {onEdit && (
                            <button onClick={() => onEdit(item.id)} className="p-2 rounded bg-blue-50 hover:bg-blue-100 text-blue-600" title="Modifier" >
                              <Pencil size={10} />
                            </button>
                          )} */}
                          {onView && (

                            <>
                              <button
                                onClick={() => {
                                  handleOpen();
                                  // setSelectedEvent(ticket);
                                  setSelectedTicket(item);
                                }}
                                className="p-2 rounded bg-red-50 hover:bg-red-100 text-red-600"
                                title="Supprimer"
                              >
                                <Eye size={18} />
                              </button>

                              <Modal
                                open={open}
                                size={"lg"}
                                onClose={handleClose}
                                onEntered={handleEntered}
                              >
                                <Modal.Header>
                                  <Modal.Title className="text-theme">
                                    Détail du ticket
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  {selectedTicket && (
                                    <>
                                      <EventTicket ticketSelected={selectedTicket} urlBaseImage={urlBaseImage} />

                                    </>
                                  )}
                                </Modal.Body>
                                <Modal.Footer>
                                  <Button
                                    onClick={handleClose}
                                    appearance="secondary"
                                  >
                                    Fermer
                                  </Button>
                                  <Button
                                    onClick={handleClose}
                                    appearance="Seccess"
                                  >
                                    Télécharger
                                  </Button>
                                  <Button
                                    onClick={handleClose}
                                    appearance="primary"
                                  >
                                    Partager
                                  </Button>
                                </Modal.Footer>
                              </Modal>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (

        <div className="d-flex justify-content-center gap-2 mt-4 align-items-center">
          <span>{filteredData.length} résultats trouvés</span>

          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="btn btn-secondary"
          >
            Précédent
          </button>
          <span className="d-flex align-items-center px-3">
            Page {currentPage} sur {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="btn btn-secondary"
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  );
};

export default GenericCardView;