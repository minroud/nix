import React from 'react';
import './App.css';
import { IonApp, IonContent, IonHeader, IonToolbar } from '@ionic/react';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary"></IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonApp>
  );
};

export default App;
