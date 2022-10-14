const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      token:"",
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      registrar: async (endpoint, data, metodo) => {
        let url = process.env.URL_BACKEND;
        let response = await fetch(url + endpoint, {
          method: metodo,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        return response;
      },
      tokenvalidar: async (endpoint, data = undefined, metodo ="GET") => {
        const store = getStore();
        let url = process.env.URL_BACKEND;
        let encabezado = {
          method: metodo,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.token,
          },
          body: data ? JSON.stringify(data) : undefined,
        };
        let response = await fetch(url + endpoint, encabezado);
        return response;
      },
      login: async(data)=>{
        let url = process.env.URL_BACKEND;
        let response=await fetch(url+"login",{
          method:"POST",
          headers:{ "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        return response
      },Cargar: async(endpoint, data=undefined, metodo="GET")=>{
        let url = process.env.URL_BACKEND;
        let response = await fetch(url + endpoint, {
          method: metodo,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        return response;
      }
    },
  };
};

export default getState;
