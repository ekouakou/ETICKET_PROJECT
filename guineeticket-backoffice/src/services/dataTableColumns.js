import React from "react";
import { Button, Space, Switch, Image } from "antd";
import {
    EditOutlined,
    DeleteOutlined,
    CheckOutlined,
    CloseOutlined
} from "@ant-design/icons";

// Création d'une fonction qui prend les gestionnaires d'événements comme paramètres
export const getEventColumns = (
    handleEdit,
    handleDeleteItem,
    handleToggleStatus,
    baseImageUrl
) => {
    return [
        {
            title: "Image",
            dataIndex: "STR_EVEPIC",
            key: "image",
            width: 70,
            render: (text) => (
                text && (
                    <Image
                        src={`${baseImageUrl}${text}`}
                        alt="Événement"
                        width={50}
                        height={50}
                        style={{ objectFit: "cover" }}
                        preview={false}
                    />
                )
            )
        },
        {
            title: "Libellé evènement",
            dataIndex: "STR_EVENAME",
            key: "name",
            width: 200,
        },
        {
            title: "Lieu Evènement",
            dataIndex: "LG_LSTPLACEID",
            key: "place",
            width: 150,
        },
        {
            title: "Date début",
            dataIndex: "DT_EVEBEGIN",
            key: "startDate",
            width: 100,
        },
        {
            title: "H. Début",
            dataIndex: "HR_EVEBEGIN",
            key: "startTime",
            width: 100,
        },
        {
            title: "Catégories",
            dataIndex: "categorie",
            key: "categories",
            width: 180,
            render: (categories) => (
                categories && categories.map((cat, index) => (
                    <div key={index}>
                        <small>
                            {cat.STR_LSTDESCRPTION}: {cat.DBL_ELIAMOUNT} {process.env.REACT_APP_DEVISE}
                        </small>
                        {index < categories.length - 1 && <br />}
                    </div>
                ))
            )
        },
        {
            title: "Statut",
            dataIndex: "STR_EVESTATUT",
            key: "status",
            width: 100,
            render: (status, record) => (
                <Switch
                    checked={status === "enable"}
                    onChange={() => handleToggleStatus(record.LG_EVEID, status)}
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                />
            )
        },
        {
            title: "Actions",
            key: "actions",
            width: 100,
            fixed: "right",
            render: (_, record) => (
                <Space>
                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record)}
                        size="small"
                    />
                    <Button
                        type="danger"
                        icon={<DeleteOutlined />}
                        onClick={() => handleDeleteItem(record)}
                        size="small"
                    />
                    <Button
                        type={record.STR_EVESTATUT === "enable" ? "text" : "primary"}
                        danger={record.STR_EVESTATUT === "enable"}
                        icon={record.STR_EVESTATUT === "enable" ? <CloseOutlined /> : <CheckOutlined />}
                        onClick={() => handleToggleStatus(record.LG_EVEID, record.STR_EVESTATUT)}
                        size="small"
                    />
                </Space>
            )
        }
    ];
};

export const getClientColumns = (
    handleEdit,
    handleDeleteItem,
    handleToggleStatus,
    baseImageUrl
) => {
    return [
        // {
        //   title: "Image",
        //   dataIndex: "STR_BANPATH",
        //   key: "image",
        //   width: 70,
        //   render: (text) =>
        //     text && (
        //       <Image
        //         src={`${process.env.REACT_APP_BASE_IMAGE_URL}${text}`}
        //         alt="Bannière"
        //         width={50}
        //         height={50}
        //         style={{ objectFit: "cover" }}
        //         preview={false}
        //       />
        //     ),
        // },


        { dataIndex: "STR_CLIFIRSTNAME", title: "Nom" },
        { dataIndex: "STR_CLILASTNAME", title: "Prenom" },
        { dataIndex: "STR_CLIPHONE", title: "Téléphone" },
        { dataIndex: "STR_CLIMAIL", title: "Email" },

        { dataIndex: "STR_CLILOGIN", title: "Login" },
        { dataIndex: "NOMBRE", title: "Nombre" },
        {
            title: "Statut",
            dataIndex: "STR_UTISTATUT",
            key: "status",
            width: 100,
            render: (status, record) => (
                <Switch
                    checked={status === "enable"}
                    onChange={() => handleToggleStatus(record.LG_CLIID, status)}
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                />
            ),
        },
        {
            title: "Actions",
            key: "actions",
            width: 100,
            fixed: "right",
            render: (_, record) => (
                <Space>
                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record)}
                        size="small"
                    />
                    <Button
                        type="danger"
                        icon={<DeleteOutlined />}
                        onClick={() => handleDeleteItem(record)}
                        size="small"
                    />
                    <Button
                        type={record.STR_UTISTATUT === "enable" ? "text" : "primary"}
                        danger={record.STR_UTISTATUT === "enable"}
                        icon={
                            record.STR_UTISTATUT === "enable" ? (
                                <CloseOutlined />
                            ) : (
                                <CheckOutlined />
                            )
                        }
                        onClick={() =>
                            handleToggleStatus(record.LG_CLIID, record.STR_UTISTATUT)
                        }
                        size="small"
                    />
                </Space>
            ),
        },
    ];
};


export const getTicketColumns = (
    handleEdit,
    handleDeleteItem,
    handleToggleStatus,
    baseImageUrl
) => {
    return [
        {
            title: "Image",
            dataIndex: "STR_EVEPIC",
            key: "image",
            width: 70,
            render: (text) => (
                text && (
                    <Image
                        src={`${baseImageUrl}${text}`}
                        alt="Événement"
                        width={50}
                        height={50}
                        style={{ objectFit: "cover" }}
                        preview={false}
                    />
                )
            )
        },
        {
            title: "Annonceur",
            dataIndex: "STR_EVEANNONCEUR",
            key: "name",
            width: 150,
        },
        {
            title: "Evènement",
            dataIndex: "STR_EVENAME",
            key: "place",
            width: 200,
        },
        //   {
        //     title: "Date début",
        //     dataIndex: "DT_EVEBEGIN",
        //     key: "startDate",
        //     width: 100,
        //   },
        {
            title: "Date validation",
            dataIndex: "DT_TCIVALIDATED",
            key: "startTime",
            width: 100,
        },
        {
            title: "Client",
            dataIndex: "STR_TICPHONE",
            key: "startTime",
            width: 100,
        },
        {
            title: "Email",
            dataIndex: "STR_TICMAIL",
            key: "startTime",
            width: 100,
        },
        //   {
        //     title: "Email",
        //     dataIndex: "STR_TICMAIL",
        //     key: "startTime",
        //     width: 100,
        //   },

        //   {
        //     title: "Catégories",
        //     dataIndex: "categorie",
        //     key: "categories",
        //     width: 180,
        //     render: (categories) => (
        //       categories && categories.map((cat, index) => (
        //         <div key={index}>
        //           <small>
        //             {cat.STR_LSTDESCRPTION}: {cat.DBL_ELIAMOUNT} GNF
        //           </small>
        //           {index < categories.length - 1 && <br />}
        //         </div>
        //       ))
        //     )
        //   },
        //   {
        //     title: "Statut",
        //     dataIndex: "STR_EVESTATUT",
        //     key: "status",
        //     width: 100,
        //     render: (status, record) => (
        //       <Switch
        //         checked={status === "enable"}
        //         onChange={() => handleToggleStatus(record.LG_TICID, status)}
        //         checkedChildren={<CheckOutlined />}
        //         unCheckedChildren={<CloseOutlined />}
        //       />
        //     )
        //   },
        //   {
        //     title: "Actions",
        //     key: "actions",
        //     width: 100,
        //     fixed: "right",
        //     render: (_, record) => (
        //       <Space>
        //         <Button
        //           type="primary"
        //           icon={<EditOutlined />}
        //           onClick={() => handleEdit(record)}
        //           size="small"
        //         />
        //         <Button
        //           type="danger"
        //           icon={<DeleteOutlined />}
        //           onClick={() => handleDeleteItem(record)}
        //           size="small"
        //         />
        //         <Button
        //           type={record.STR_EVESTATUT === "enable" ? "text" : "primary"}
        //           danger={record.STR_EVESTATUT === "enable"}
        //           icon={record.STR_EVESTATUT === "enable" ? <CloseOutlined /> : <CheckOutlined />}
        //           onClick={() => handleToggleStatus(record.LG_EVEID, record.STR_EVESTATUT)}
        //           size="small"
        //         />
        //       </Space>
        //     )
        //   }
    ];
};


export const getTicketClientColumns = (
    handleEdit,
    handleDeleteItem,
    handleToggleStatus,
    baseImageUrl
) => {
    return [
        {
            title: "Image",
            dataIndex: "STR_EVEPIC",
            key: "image",
            width: 70,
            render: (text) => (
                text && (
                    <Image
                        src={`${baseImageUrl}${text}`}
                        alt="Événement"
                        width={50}
                        height={50}
                        style={{ objectFit: "cover" }}
                        preview={false}
                    />
                )
            )
        },
        {
            title: "Annonceur",
            dataIndex: "STR_EVEANNONCEUR",
            key: "name",
            width: 150,
        },
        {
            title: "Evènement",
            dataIndex: "STR_EVENAME",
            key: "place",
            width: 200,
        },
        {
            title: "Date validation",
            dataIndex: "DT_TCIVALIDATED",
            key: "startTime",
            width: 100,
        },
        {
            title: "Client",
            dataIndex: "STR_TICPHONE",
            key: "startTime",
            width: 100,
        },
        {
            title: "Email",
            dataIndex: "STR_TICMAIL",
            key: "startTime",
            width: 100,
        },
    ];
};



// DT_EVECREATED
// DT_EVEUPDATED
// DT_TCICREATED
// DT_TCIVALIDATED
// LG_LSTPLACEID
// LG_TICID
// STR_EVEANNONCEUR
// STR_EVEBANNER
// STR_EVEDESCRIPTION
// STR_EVENAME
// STR_EVEPIC
// STR_TICBARECODE
// STR_TICMAIL
// STR_TICNAME
// STR_TICPHONE