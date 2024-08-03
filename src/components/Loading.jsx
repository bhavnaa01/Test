import React from "react";

const Loading = () => {
   return (
      <>
         <div class="container-fluid col-12 text-center bg-info" style={{ height: '50rem' }}>
            <div class="spinner-border" role="status" style={{ marginTop: "20rem", width: "5rem", height: "5rem" }}>
               {/* <span class="sr-only">Loading...</span> */}
            </div>
            <h1>Loading please wait...</h1>

         </div>
      </>
   )



}
export default Loading;