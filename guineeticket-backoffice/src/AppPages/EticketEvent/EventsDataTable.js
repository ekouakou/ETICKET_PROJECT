import React, { useState, useEffect } from "react";
import {
  Table,
  Pagination,
  ButtonGroup,
  Button,
  Toggle,
  Modal,
  Form,
  Schema,
  DatePicker,
  Loader,
  IconButton,
  FlexboxGrid,
  SelectPicker,
  Notification,
  toaster,
  Input,
} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Edit, Trash, Plus, Check, Close } from "@rsuite/icons";
import { useNavigate } from "react-router-dom";
import eventService from "../../services/EventService";
import PageTitle from "../PageTitle";
import ActionButton from "../ActionButton";

const paths = JSON.parse(localStorage.getItem("appPaths"));

const { Column, HeaderCell, Cell } = Table;

// Création du schéma de validation
const { StringType, DateType } = Schema.Types;
const model = Schema.Model({
  STR_EVENAME: StringType().isRequired("Le nom est requis"),
  STR_EVEDESCRIPTION: StringType().isRequired("La description est requise"),
  LG_LSTPLACEID: StringType().isRequired("Le lieu est requis"),
  DT_EVEBEGIN: DateType().isRequired("La date de début est requise"),
  DT_EVEEND: DateType().isRequired("La date de fin est requise"),
});

const EventsDataTable = () => {
  const navigate = useNavigate();

  // États pour gérer les données et l'interface
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [formValue, setFormValue] = useState({});
  const [formError, setFormError] = useState({});
  const [dateRange, setDateRange] = useState({
    start: "2020-01-01",
    end: "2025-08-31",
  });

  // Fonction pour charger les données
  const loadData = async () => {
    try {
      setLoading(true);
      const data = await eventService.getEvents(navigate, dateRange);

      // Pagination côté client puisque l'API ne supporte pas la pagination
      const paginatedData = data.slice((page - 1) * limit, page * limit);

      setEvents(paginatedData);
      setTotal(data.length);
      setLoading(false);
    } catch (error) {
      console.error("Erreur lors du chargement des données:", error);
      toaster.push(
        <Notification type="error" header="Erreur">
          Impossible de charger les données. Veuillez réessayer.
        </Notification>
      );
      setLoading(false);
    }
  };

  // Chargement initial des données
  useEffect(() => {
    loadData();
  }, [page, limit, dateRange]);

  // Fonction pour gérer le changement de statut
  const handleToggleStatus = async (eventId, currentStatus) => {
    try {
      const newStatus = currentStatus === "enable" ? "disable" : "enable";
      const success = await eventService.updateEventStatus(
        navigate,
        eventId,
        newStatus
      );

      if (success) {
        // Mise à jour locale des données
        const updatedEvents = events.map((event) =>
          event.LG_EVEID === eventId
            ? { ...event, STR_EVESTATUT: newStatus }
            : event
        );

        setEvents(updatedEvents);

        toaster.push(
          <Notification type="success" header="Succès">
            Statut mis à jour avec succès
          </Notification>
        );
      } else {
        throw new Error("Échec de la mise à jour du statut");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut:", error);
      toaster.push(
        <Notification type="error" header="Erreur">
          Impossible de mettre à jour le statut
        </Notification>
      );
    }
  };

  // Fonction pour ouvrir le modal de modification
  // Modifiez la fonction handleEdit pour naviguer vers la page d'édition
  const handleEdit = (event) => {
    navigate(paths.saveEventData, {
      state: { LG_EVEID: event.LG_EVEID },
    });
  };

  const handleDeleteClick = (event) => {
    setCurrentEvent(event);
    try {
      const success = eventService.deleteEvent(navigate, event.LG_EVEID);

      if (success) {
        toaster.push(
          <Notification type="success" header="Succès">
            Statut mis à jour avec succès
          </Notification>
        );
      } else {
        throw new Error("Échec de la mise à jour du statut");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      toaster.push(
        <Notification type="error" header="Erreur">
          Impossible de supprimer l'événement
        </Notification>
      );
    }

    eventService.deleteEvent(navigate, event.LG_EVEID);
    // setShowDeleteModal(true);
  };

  // Cellule personnalisée pour la colonne d'actions
  const ActionCell = ({ rowData, dataKey, ...props }) => {
    return (
      <Cell {...props} style={{ padding: "6px" }}>
        <ButtonGroup>
          <IconButton
            appearance="primary"
            onClick={() => handleEdit(rowData)}
            icon={<Edit />}
            size="sm"
          />
          <IconButton
            appearance="subtle"
            color="red"
            onClick={() => handleDeleteClick(rowData)}
            icon={<Trash />}
            size="sm"
          />
          <IconButton
            appearance={
              rowData.STR_EVESTATUT === "enable" ? "ghost" : "primary"
            }
            color={rowData.STR_EVESTATUT === "enable" ? "red" : "green"}
            onClick={() =>
              handleToggleStatus(rowData.LG_EVEID, rowData.STR_EVESTATUT)
            }
            icon={rowData.STR_EVESTATUT === "enable" ? <Close /> : <Check />}
            size="sm"
          />
        </ButtonGroup>
      </Cell>
    );
  };

  // Cellule personnalisée pour l'affichage des images
  const ImageCell = ({ rowData, dataKey, ...props }) => {
    return (
      <Cell {...props}>
        {rowData[dataKey] && (
          <img
            src={`${process.env.REACT_APP_BASE_IMAGE_URL}${rowData[dataKey]}`}
            alt={rowData.STR_EVENAME}
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
        )}
      </Cell>
    );
  };

  // Cellule personnalisée pour l'affichage du statut avec toggle
  const StatusCell = ({ rowData, dataKey, ...props }) => {
    return (
      <Cell {...props} style={{ padding: "6px" }}>
        <Toggle
          checked={rowData[dataKey] === "enable"}
          onChange={() =>
            handleToggleStatus(rowData.LG_EVEID, rowData[dataKey])
          }
          size="sm"
          checkedChildren="Actif"
          unCheckedChildren="Inactif"
        />
      </Cell>
    );
  };

  // Cellule personnalisée pour les catégories
  const CategoriesCell = ({ rowData, dataKey, ...props }) => {
    return (
      <Cell
        {...props}
        style={{ maxWidth: "50px", maxHeight: "50px", objectFit: "cover" }}
      >
        {rowData.categorie &&
          rowData.categorie.map((cat, index) => (
            <div key={index}>
              <small>
                {cat.STR_LSTDESCRPTION}: {cat.DBL_ELIAMOUNT} GNF
              </small>
              {index < rowData.categorie.length - 1 && <br />}
            </div>
          ))}
      </Cell>
    );
  };

  // Gérer le changement de date
  const handleDateRangeChange = (value) => {
    setDateRange(value);
  };

  const breadcrumbs = [
    { text: "Evenement", link: "/" },
    { isBullet: true },
    { text: "Liste des évènements" },
  ];

  return (
    <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
      <div className="d-flex flex-column flex-column-fluid">
        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
          <div
            id="kt_app_toolbar_container"
            className="app-container container-xxl d-flex flex-stack"
          >
            <PageTitle
              heading="Liste des évenements"
              breadcrumbs={breadcrumbs}
            />
            <ActionButton
              text="Ajouter un évenement"
              link={process.env.REACT_APP_SAVE_EVENT_DATA}
              className="btn-primary"
            />
          </div>
        </div>
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div
            id="kt_app_content_container"
            className="app-container container-xxl"
          >
            {loading ? (
              <div style={{ textAlign: "center", padding: 20 }}>
                <Loader size="lg" content="Chargement des données..." />
              </div>
            ) : (
              <>
                <Table autoHeight data={events} bordered cellBordered hover>
                  <Column width={70} align="center">
                    <HeaderCell>Image</HeaderCell>
                    <ImageCell dataKey="STR_EVEPIC" />
                  </Column>

                  <Column width={200}>
                    <HeaderCell>Nom</HeaderCell>
                    <Cell dataKey="STR_EVENAME" />
                  </Column>

                  <Column width={150}>
                    <HeaderCell>Lieu</HeaderCell>
                    <Cell dataKey="LG_LSTPLACEID" />
                  </Column>

                  <Column width={100}>
                    <HeaderCell>Date début</HeaderCell>
                    <Cell dataKey="DT_EVEBEGIN" />
                  </Column>

                  <Column width={100}>
                    <HeaderCell>Date fin</HeaderCell>
                    <Cell dataKey="DT_EVEEND" />
                  </Column>

                  <Column width={100}>
                    <HeaderCell>Heure début</HeaderCell>
                    <Cell dataKey="HR_EVEBEGIN" />
                  </Column>

                  <Column width={100}>
                    <HeaderCell>Heure fin</HeaderCell>
                    <Cell dataKey="HR_EVEEND" />
                  </Column>

                  <Column width={180}>
                    <HeaderCell>Catégories</HeaderCell>
                    <CategoriesCell dataKey="categorie" />
                  </Column>

                  <Column width={100}>
                    <HeaderCell>Statut</HeaderCell>
                    <StatusCell dataKey="STR_EVESTATUT" />
                  </Column>

                  <Column width={150} fixed="right">
                    <HeaderCell>Actions</HeaderCell>
                    <ActionCell dataKey="id" />
                  </Column>
                </Table>

                <div style={{ padding: "20px 0" }}>
                  <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    maxButtons={5}
                    size="md"
                    layout={["total", "-", "limit", "|", "pager", "skip"]}
                    total={total}
                    limitOptions={[10, 20, 30]}
                    limit={limit}
                    activePage={page}
                    onChangePage={setPage}
                    onChangeLimit={setLimit}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDataTable;
