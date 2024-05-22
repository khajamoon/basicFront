"use client";
import React, { useEffect, useRef, useState } from "react";
import { AppDispatch, RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "@/app/redux/features/jobs/jobsSlice";
import { AnalyticalTable } from "@ui5/webcomponents-react";





export default async function Home() {

  const { clients } = useSelector((state: RootState) => state.jobsReducer);
  const dispatch = useDispatch<AppDispatch>();
  const windowSize = useRef(
    typeof window !== "undefined"
      ? [window.innerWidth, window.innerHeight]
      : [0, 0]
  );
  useEffect(() => {

    dispatch(getClients({}));
  }, []);

  console.log(clients, "clientsss");


  return (
    <div>


      {clients &&


        <>

          <h1>Welcome</h1>
          <AnalyticalTable
            columns={[
              {
                Header: 'id',
                accessor: 'id',
                headerTooltip: 'Full Name'
              },
              {
                Header: 'username',
                accessor: 'username',
                className: 'superCustomClass',
                disableFilters: false,
                disableGroupBy: true,
                disableSortBy: false,

              },
              {
                Header: 'Password',
                accessor: 'password'
              },


            ]}
            data={clients.data}
            filterable
            groupBy={[]}
            groupable
            header="Table Title"
            infiniteScroll
            onColumnsReorder={() => { }}
            onGroup={() => { }}
            onLoadMore={() => { }}
            onRowClick={() => { }}
            onRowExpandChange={() => { }}
            onRowSelect={() => { }}
            onSort={() => { }}
            onTableScroll={() => { }}
            rowHeight={44}
            selectedRowIds={{
              3: true
            }}
            selectionMode="SingleSelect"
            withRowHighlight
          />
        </>

      }






    </div>
  );
}
