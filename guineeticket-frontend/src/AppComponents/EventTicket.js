import React from 'react';
import { urlBaseImage, rootUrl, baseUrl } from "../services/urlUtils";


const EventTicket = ({ ticketSelected }) => {

    return (
        // <div className="w-full max-w-4xl bg-black p-6 text-white font-sans" >
        //     <div className="flex gap-4">
        //         {/* Left section with main image */}
        //         <div className="w-1/3">

        //             <div className="relative">
        //                 <div className="bg-gradient-to-r from-red-600 to-purple-600 absolute inset-0 opacity-50"></div>
        //                 <img
        //                     src={urlBaseImage + ticketSelected.STR_TICBARECODE}
        //                     alt="Album artwork"
        //                     className="w-full object-cover"
        //                 />
        //             </div>
        //         </div>

        //         {/* Middle section with track list */}
        //         <div className="w-1/3 flex flex-col gap-4">
        //             <div className="bg-red-600 px-4 py-2 text-sm inline-block">
        //                 BAND #1<br />
        //                 THE FIRST ALBUM
        //             </div>

        //             <div className="mt-4">
        //                 <img
        //                     src="/api/placeholder/300/200"
        //                     alt="Secondary artwork"
        //                     className="w-full object-cover"
        //                 />
        //             </div>

        //             <div className="space-y-4 mt-4">
        //                 <div>
        //                     <h3 className="text-red-600 font-bold">01. Day by Day</h3>
        //                     <p className="text-xs text-gray-400 mt-1">
        //                         A sweetened, aromatic solution of alcohol<br />
        //                         and water containing, or used as a vehicle<br />
        //                         for medicinal substances.
        //                     </p>
        //                 </div>

        //                 <div>
        //                     <h3 className="text-red-600 font-bold">02. Backfire</h3>
        //                     <div style={{ width: "100%", padding: 0 }}>
        //                         <div
        //                             style={{
        //                                 fontSize: "0.875rem",
        //                                 fontWeight: "bold",
        //                                 fontFamily: "Arial, sans-serif",
        //                                 marginTop: "0.25rem",
        //                                 display: "flex",
        //                                 justifyContent: "space-between"
        //                             }}
        //                         >
        //                             <span
        //                                 style={{
        //                                     fontSize: "0.875rem",
        //                                     fontWeight: "bold",
        //                                     padding: 0,
        //                                     color: "#fff",
        //                                     fontFamily: "Arial, sans-serif"
        //                                 }}
        //                             >
        //                                 <i
        //                                     className="fas fa-calendar-alt"
        //                                     style={{ fontSize: "0.875rem", color: "#fff" }}
        //                                 />
        //                                 <span style={{ fontSize: "0.875rem", color: "#ffd214" }}>
        //                                     {" "}
        //                                     27/07/2024
        //                                 </span>
        //                                 &nbsp; | &nbsp;
        //                                 <i
        //                                     className="far fa-clock"
        //                                     style={{ fontSize: "0.875rem" }}
        //                                 />
        //                                 <span style={{ fontSize: "0.875rem", color: "#ffd214" }}>
        //                                     {" "}
        //                                     08:00
        //                                 </span>
        //                                 &nbsp; | &nbsp;
        //                                 <span style={{ fontSize: "0.875rem", color: "#ffd214" }}>
        //                                     {" "}
        //                                     Stade national
        //                                 </span>
        //                             </span>
        //                         </div>
        //                         <div
        //                             style={{
        //                                 fontSize: "2rem",
        //                                 borderBottom: "1px dotted #fff",
        //                                 color: "#fc0001",
        //                                 fontFamily: "Arial, sans-serif",
        //                                 fontWeight: "bold"
        //                             }}
        //                         >
        //                             7.000.000 GNF
        //                         </div>
        //                         <div style={{ display: "flex" }}>
        //                             <div style={{ marginTop: 10 }}>
        //                                 <img
        //                                     src={urlBaseImage + ticketSelected.STR_TICBARECODE}
        //                                     width="40px"
        //                                     style={{ height: "auto" }}
        //                                     alt="Image 2"
        //                                 />
        //                             </div>
        //                             <div style={{ marginTop: 10, marginLeft: 10 }}>
        //                                 <div
        //                                     className="title"
        //                                     style={{
        //                                         color: "#fff",
        //                                         fontFamily: "Arial, sans-serif",
        //                                         fontWeight: "bold"
        //                                     }}
        //                                 >
        //                                     Ylou le boss
        //                                 </div>
        //                                 <div
        //                                     className="description"
        //                                     style={{
        //                                         color: "#fff",
        //                                         fontFamily: "Arial, sans-serif",
        //                                         fontWeight: "bold"
        //                                     }}
        //                                 >
        //                                     0749345289
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Right section with text and QR codes */}
        //         <div className="w-1/3 flex flex-col justify-between bg-white">
        //             <div className="flex gap-2">
        //                 <div className="text-red-600 text-4xl font-bold leading-none">VOL.2</div>
        //                 <div className="text-red-600 text-4xl font-bold leading-none">ALBUM</div>
        //             </div>

        //             <div className="mt-auto space-y-4">
        //                 <img
        //                     src="/api/placeholder/100/100"
        //                     alt="QR Code"
        //                     className="w-24 h-24"
        //                 />

        //                 <div className="flex items-center gap-2">
        //                     <img
        //                         src="/api/placeholder/40/40"
        //                         alt="Logo"
        //                         className="w-10 h-10"
        //                     />
        //                     <div className="h-8 w-48 bg-[#333] rounded"></div>
        //                 </div>

        //                 <img
        //                     src="/api/placeholder/100/100"
        //                     alt="QR Code"
        //                     className="w-24 h-24"
        //                 />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>

            <div class="ticket">
                <table>
                    <tr>
                        <td class="left-section">
                            <img src="http://guineeticket.com/eticketbackend/backoffice/images/product/1738349197.jpeg" width="100%" height="100%" />

                        </td>
                        <td class="right-section">
                            <div class="ticket-number ticket-number-top">
                                Gate: 01 | Row: 021 | Seat: 03
                            </div>
                            <div class="barcode">
                                <img src={urlBaseImage + ticketSelected.STR_TICBARECODE} width="150px" height="150px" />
                                <div class="ticket-number ticket-number-bottom">
                                    Ticket Number: 0123456789
                                </div>
                                <div class="ticket-number">
                                    Le lorem ipsum également appelé faux-texte,.
                                </div>
                                <div class="partenaire">
                                    <img src="assets/media/logos/logo_light.svg" width="80px" alt="Logo 1" />
                                </div>

                                {/* <!-- Tableau des marques --> */}

                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    );
};

export default EventTicket;

