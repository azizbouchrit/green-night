import React, { useState } from "react";
import "./App.css";
import CreateOrganization from "./components/CreateOrganization";
import DeliveryList from "./components/DeliveryList";
import OrderDetails from "./components/OrderDetails";

const App = (props) => {

  const [organizations, setOrganizations] = useState([
    {
      id: "1",
      name: 'ISSAT Sousse',
      type: 'academic',
      email: 'contact@issatso.com',
      website: 'http://www.issatso.rnu.tn/',
      description:
        "ISSATS est un établissement scientifique relevant de l'Université de Sousse",
      phone: '73 382 656',
      adress: '50 Avenue Habib Bourguiba, Tunis 1001',
      lat: '35.813084',
      long: '10.638308'
    },
    {
      id: "2",
      name: 'ISET Kairouan ',
      type: 'academic',
      email: 'contact@iset.com',
      website: 'http://www.isetkr.rnu.tn/',
      description:
        "L'École nationale d'ingénieurs de Sousse ou ENISo est une école d'ingénieurs tunisienne qui dépend de l'Université de Sousse. Elle a pour objectif de répondre à un besoin national, de jour en jour grandissant, ",
      phone: '73 369 500',
      lat: '35.7',
      long: '9.9',
      adress: '50 Avenue Habib Bourguiba, Tunis 1001',
    },
    {
      id: "3",
      name: 'DITRA Systems',
      type: 'startup',
      email: 'contact@ditra.com',
      website: 'http://www.ditra.tn/',
      description:
        "DITRA systems est une plateforme d'enseignement en ligne",
      phone: '12 345 678',
      lat: '37',
      long: '10.',
      adress: '50 Avenue Habib Bourguiba, Tunis 1001',
    },
    {
      id: "4",
      name: 'Randa',
      type: 'industrial',
      email: 'contact@randa.com',
      website: 'http://www.randa.tn/',
      description:
        "Randa est une entreprise tunisienne, spécialisée dans la transformation du blé dur en semoule et de la semoule en produits finis (Pâtes, couscous, farine, ...)",
      phone: '12 345 678',
      lat: '36.735341',
      long: '9.5',
      adress: '50 Avenue Habib Bourguiba, Tunis 1001',
    },
    {
      id: "5",
      name: 'Delice Groupe',
      type: 'industrial',
      email: 'contact@delice.com',
      website: 'http://www.delice.tn/',
      description:
        "Le groupe Délice est un groupe tunisien de l'industrie agroalimentaire qui opère essentiellement dans l'industrie laitière.",
      phone: '12 345 678',
      lat: '36.839526',
      long: '10.240514',
      adress: '50 Avenue Habib Bourguiba, Tunis 1001',
    }
  ])

  const [selectedOrganization, setSelectedOrganization] = useState({});

  const addOrganization = (org) => {
    const data = [...organizations, org]
    setOrganizations(data)
  }
  return (
    <div className='App'>
      <DeliveryList organizations={organizations} setSelectedOrganization={(organization) => setSelectedOrganization(organization)} />
      <OrderDetails organizations={organizations} selectedOrganization={selectedOrganization} />
      <CreateOrganization addOrganization={addOrganization} />
    </div>
  );
};

export default App;
