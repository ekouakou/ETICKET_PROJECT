import React, { useState, useEffect } from 'react';
import {
  Steps,
  Panel,
  Button,
  Stack,
  Grid,
  Row,
  Col,
  Form,
  FlexboxGrid,
  List,
  Message,
  Modal,
  useMediaQuery,
  Loader,
  Animation
} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

// Palette de couleurs personnalisée pour une meilleure cohérence visuelle
const theme = {
    primary: '#0a2557',     // Bleu foncé AFG Bank (principal)
    secondary: '#cc9933',   // Or/ocre AFG Bank
    primaryLight: '#e6eaf2', // Bleu AFG Bank très clair (pour arrière-plans)
    success: '#00874a',     // Vert foncé élégant
    warning: '#cb8a14',     // Orange plus sophistiqué
    danger: '#b2293a',      // Rouge élégant
    dark: '#1a1a2e',        // Texte principal presque noir
    gray: '#5a6685',        // Bleu-gris pour texte secondaire
    light: '#f8f9fc',       // Fond clair légèrement bleuté
    border: '#d8dee9',      // Bordures subtiles
    gold: '#cc9933',        // Or AFG Bank pour accents luxueux
    goldLight: '#f0e6cc',   // Or très clair pour arrière-plans
  }

// Utiliser des emojis au lieu d'icônes pour éviter les problèmes d'importation
const serviceIcons = {
  information: "ℹ️",
  consultation: "📅",
  paiement: "💳",
  reclamation: "💬",
  livraison: "📦",
  reparation: "🔧"
};

// Animation de fade pour les transitions
const { Fade } = Animation;

const VerticalTicketWizard = () => {
  // États principaux
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [ticketNumber, setTicketNumber] = useState('');
  const [waitTime, setWaitTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [selectionDelay, setSelectionDelay] = useState(false);
  
  // Media queries pour le responsive design
  // On définit mobile comme étant les écrans de moins de 768px (tablettes et téléphones)
  const isMobile = useMediaQuery('(max-width: 767px)');
  // Très petits écrans (téléphones)
  const isExtraSmall = useMediaQuery('(max-width: 480px)');
  
  // Liste des services disponibles
  const services = [
    { id: 'information', name: 'Information', description: 'Renseignements généraux', color: '#3498db' },
    { id: 'consultation', name: 'Consultation', description: 'Rencontrer un conseiller', color: '#9b59b6' },
    { id: 'paiement', name: 'Paiement', description: 'Effectuer un paiement', color: '#2ecc71' },
    { id: 'reclamation', name: 'Réclamation', description: 'Déposer une réclamation', color: '#e74c3c' },
    { id: 'livraison', name: 'Livraison', description: 'Retrait de commande', color: '#f39c12' },
    { id: 'reparation', name: 'Réparation', description: 'Service après-vente', color: '#1abc9c' }
  ];
  
  // Effets
  useEffect(() => {
    // Générer un numéro de ticket aléatoire quand on arrive à l'étape finale
    if (step === 3) {
      const randomTicket = `A-${Math.floor(Math.random() * 100)}`;
      const randomWait = Math.floor(Math.random() * 20) + 5; // Entre 5 et 25 minutes
      setTicketNumber(randomTicket);
      setWaitTime(randomWait);
    }
  }, [step]);

  // Effet pour la redirection automatique après le modal de succès
  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        handleReset();
      }, 2000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showSuccess]);

  // Gestionnaires d'événements
  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setSelectionDelay(true);
    
    // Attendre 2 secondes pour que l'utilisateur voie son choix
    setTimeout(() => {
      setSelectionDelay(false);
      // Puis afficher le loader pour 400ms
    //   setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep(1);
      }, 100);
    }, 700);
  };

  const handleUserDataChange = (value, name) => {
    setUserData({
      ...userData,
      [name]: value
    });
    
    // Effacer l'erreur lorsque l'utilisateur corrige le champ
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: null
      });
    }
  };

  const handleNext = () => {
    if (step === 1) {
      // Validation du formulaire avant de passer à l'étape suivante
      const errors = {};
      
      if (!userData.name.trim()) {
        errors.name = 'Le nom est obligatoire';
      }
      
      if (!userData.phone.trim()) {
        errors.phone = 'Le téléphone est obligatoire';
      } else if (!/^[0-9+\s-]{8,15}$/.test(userData.phone.trim())) {
        errors.phone = 'Numéro de téléphone invalide';
      }
      
      if (userData.email && !/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = 'Email invalide';
      }
      
      if (Object.keys(errors).length > 0) {
        setValidationErrors(errors);
        return;
      }
    }
    
    // Animation de transition
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(step + 1);
    }, 400);
  };

  const handlePrevious = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(step - 1);
    }, 400);
  };

  const handleConfirm = () => {
    setShowSuccess(true);
  };

  const handleReset = () => {
    // Réinitialiser tout le wizard
    setShowSuccess(false);
    setStep(0);
    setSelectedService(null);
    setUserData({ name: '', phone: '', email: '' });
    setValidationErrors({});
  };

  const validateUserData = () => {
    return userData.name.trim() !== '' && userData.phone.trim() !== '';
  };

  const getSelectedServiceName = () => {
    const service = services.find(s => s.id === selectedService);
    return service ? service.name : '';
  };
  
  const getSelectedServiceColor = () => {
    const service = services.find(s => s.id === selectedService);
    return service ? service.color : theme.primary;
  };

  // Rendu du contenu en fonction de l'étape actuelle
  const renderStepContent = () => {
    if (isLoading) {
      return (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '300px' 
        }}>
          <Loader size="lg" content="Chargement..." vertical />
        </div>
      );
    }
    
    switch (step) {
      case 0:
        return (
          <Fade in={true}>
            <div>
              <h3 style={{ 
                marginBottom: '20px', 
                color: theme.dark,
                fontWeight: 600,
                position: 'relative'
              }}>
                Sélectionnez le service souhaité
                <div style={{ 
                  height: '3px', 
                  width: '50px', 
                  background: theme.primary, 
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0
                }}></div>
              </h3>
              <p style={{ marginBottom: '20px', color: theme.gray }}>
                Choisissez le service qui correspond à votre besoin pour commencer.
              </p>
              <Grid fluid>
                <Row gutter={isMobile ? 10 : 20}>
                  {services.map((service) => {
                    const isSelected = selectedService === service.id;
                    return (
                      <Col xs={24} sm={12} md={8} key={service.id} style={{ marginBottom: '20px' }}>
                        <div
                          onClick={() => !selectionDelay && handleServiceSelect(service.id)}
                          style={{
                            padding: '20px',
                            borderRadius: '12px',
                            border: `2px solid ${isSelected ? service.color : theme.border}`,
                            cursor: selectionDelay ? 'default' : 'pointer',
                            transition: 'all 0.25s ease',
                            backgroundColor: isSelected ? `${service.color}15` : theme.light,
                            boxShadow: isSelected 
                              ? `0 8px 16px rgba(0, 0, 0, 0.1)` 
                              : '0 2px 6px rgba(0, 0, 0, 0.05)',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: isSelected ? 'translateY(-3px)' : 'translateY(0)',
                            position: 'relative',
                            overflow: 'hidden',
                            opacity: selectionDelay && !isSelected ? 0.5 : 1
                          }}
                          role="button"
                          aria-pressed={isSelected}
                          aria-label={`Service ${service.name}: ${service.description}`}
                        >
                          {isSelected && (
                            <div style={{
                              position: 'absolute',
                              top: '10px',
                              right: '10px',
                              backgroundColor: service.color,
                              color: 'white',
                              borderRadius: '50%',
                              width: '20px',
                              height: '20px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '12px',
                              fontWeight: 'bold'
                            }}>✓</div>
                          )}
                          <div
                            style={{
                              fontSize: '32px',
                              marginBottom: '10px',
                              color: isSelected ? service.color : theme.gray,
                              transition: 'all 0.3s',
                              transform: isSelected ? 'scale(1.1)' : 'scale(1)'
                            }}
                          >
                            {serviceIcons[service.id]}
                          </div>
                          <h4 style={{ 
                            margin: '10px 0 5px', 
                            textAlign: 'center',
                            color: isSelected ? service.color : theme.dark,
                            fontWeight: isSelected ? 600 : 500
                          }}>{service.name}</h4>
                          <p style={{ 
                            margin: 0, 
                            textAlign: 'center', 
                            color: theme.gray,
                            fontSize: '14px' 
                          }}>{service.description}</p>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Grid>
              
              {selectedService && selectionDelay && (
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '30px'
                }}>
                  {/* <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    backgroundColor: `${getSelectedServiceColor()}15`,
                    padding: '10px 15px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <Loader size="sm" content="Préparation en cours..." />
                  </div> */}
                </div>
              )}
              
              {selectedService && !selectionDelay && (
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'flex-end',
                  marginTop: '20px' 
                }}>
                  <Button 
                    appearance="primary" 
                    onClick={handleNext}
                    style={{
                      backgroundColor: getSelectedServiceColor(),
                      borderColor: getSelectedServiceColor()
                    }}
                  >
                    Continuer
                  </Button>
                </div>
              )}
            </div>
          </Fade>
        );
      
      case 1:
        return (
          <Fade in={true}>
            <div>
              <h3 style={{ 
                marginBottom: '20px', 
                color: theme.dark,
                fontWeight: 600,
                position: 'relative'
              }}>
                Vos informations
                <div style={{ 
                  height: '3px', 
                  width: '50px', 
                  background: getSelectedServiceColor(), 
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0
                }}></div>
              </h3>
              <p style={{ marginBottom: '20px', color: theme.gray }}>
                Veuillez renseigner vos coordonnées pour que nous puissions vous appeler.
              </p>
              
              <Form fluid>
                <Form.Group>
                  <Form.ControlLabel>Nom complet*</Form.ControlLabel>
                  <Form.Control
                    name="name"
                    value={userData.name}
                    onChange={(value) => handleUserDataChange(value, 'name')}
                    placeholder="Entrez votre nom et prénom"
                    errorMessage={validationErrors.name}
                    error={!!validationErrors.name}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Téléphone*</Form.ControlLabel>
                  <Form.Control
                    name="phone"
                    value={userData.phone}
                    onChange={(value) => handleUserDataChange(value, 'phone')}
                    placeholder="Ex: 0612345678"
                    errorMessage={validationErrors.phone}
                    error={!!validationErrors.phone}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Email (optionnel)</Form.ControlLabel>
                  <Form.Control
                    name="email"
                    type="email"
                    value={userData.email}
                    onChange={(value) => handleUserDataChange(value, 'email')}
                    placeholder="votre@email.com"
                    errorMessage={validationErrors.email}
                    error={!!validationErrors.email}
                  />
                  <Form.HelpText>Nous vous enverrons une confirmation si fourni</Form.HelpText>
                </Form.Group>
                
                <Message 
                  showIcon 
                  type="info" 
                  style={{ marginTop: '20px' }}
                >
                  Les champs marqués d'un * sont obligatoires
                </Message>
              </Form>
              
              <Stack 
                spacing={10} 
                direction="row" 
                justifyContent="space-between" 
                style={{ marginTop: '30px' }}
              >
                <Button 
                  appearance="subtle" 
                  onClick={handlePrevious}
                >
                  Retour
                </Button>
                <Button 
                  appearance="primary" 
                  onClick={handleNext} 
                  disabled={!validateUserData()}
                  style={{
                    backgroundColor: getSelectedServiceColor(),
                    borderColor: getSelectedServiceColor(),
                    opacity: validateUserData() ? 1 : 0.6
                  }}
                >
                  Continuer
                </Button>
              </Stack>
            </div>
          </Fade>
        );
      
      case 2:
        return (
          <Fade in={true}>
            <div>
              <h3 style={{ 
                marginBottom: '20px', 
                color: theme.dark,
                fontWeight: 600,
                position: 'relative'
              }}>
                Résumé de votre demande
                <div style={{ 
                  height: '3px', 
                  width: '50px', 
                  background: getSelectedServiceColor(), 
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0
                }}></div>
              </h3>
              <p style={{ marginBottom: '20px', color: theme.gray }}>
                Vérifiez que les informations suivantes sont correctes avant de confirmer.
              </p>
              
              <div style={{ 
                backgroundColor: theme.light, 
                padding: '20px', 
                borderRadius: '12px',
                border: `1px solid ${theme.border}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <List bordered style={{ borderRadius: '8px' }}>
                  <List.Item>
                    <FlexboxGrid justify="start" align="middle">
                      <FlexboxGrid.Item colspan={6}>
                        <strong style={{ color: theme.dark }}>Service :</strong>
                      </FlexboxGrid.Item>
                      <FlexboxGrid.Item colspan={18}>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          backgroundColor: `${getSelectedServiceColor()}15`,
                          padding: '8px 12px',
                          borderRadius: '6px',
                          width: 'fit-content'
                        }}>
                          <span 
                            style={{ 
                              marginRight: '10px', 
                              color: getSelectedServiceColor(), 
                              fontSize: '18px' 
                            }} 
                          >
                            {serviceIcons[selectedService]}
                          </span>
                          <span style={{ fontWeight: 500, color: getSelectedServiceColor() }}>
                            {getSelectedServiceName()}
                          </span>
                        </div>
                      </FlexboxGrid.Item>
                    </FlexboxGrid>
                  </List.Item>
                  <List.Item>
                    <FlexboxGrid justify="start">
                      <FlexboxGrid.Item colspan={6}>
                        <strong style={{ color: theme.dark }}>Nom :</strong>
                      </FlexboxGrid.Item>
                      <FlexboxGrid.Item colspan={18}>
                        {userData.name}
                      </FlexboxGrid.Item>
                    </FlexboxGrid>
                  </List.Item>
                  <List.Item>
                    <FlexboxGrid justify="start">
                      <FlexboxGrid.Item colspan={6}>
                        <strong style={{ color: theme.dark }}>Téléphone :</strong>
                      </FlexboxGrid.Item>
                      <FlexboxGrid.Item colspan={18}>
                        {userData.phone}
                      </FlexboxGrid.Item>
                    </FlexboxGrid>
                  </List.Item>
                  {userData.email && (
                    <List.Item>
                      <FlexboxGrid justify="start">
                        <FlexboxGrid.Item colspan={6}>
                          <strong style={{ color: theme.dark }}>Email :</strong>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item colspan={18}>
                          {userData.email}
                        </FlexboxGrid.Item>
                      </FlexboxGrid>
                    </List.Item>
                  )}
                </List>
                
                <Message 
                  showIcon 
                  type="warning" 
                  style={{ marginTop: '20px' }}
                >
                  Après confirmation, un ticket sera généré et vous serez appelé(e) à votre tour.
                </Message>
              </div>
              
              <Stack 
                spacing={10} 
                direction="row" 
                justifyContent="space-between" 
                style={{ marginTop: '30px' }}
              >
                <Button 
                  appearance="subtle" 
                  onClick={handlePrevious}
                >
                  Modifier
                </Button>
                <Button 
                  appearance="primary" 
                  color="green" 
                  onClick={handleNext}
                  style={{
                    backgroundColor: theme.success,
                    borderColor: theme.success
                  }}
                >
                  Confirmer
                </Button>
              </Stack>
            </div>
          </Fade>
        );
      
      case 3:
        return (
          <Fade in={true}>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: theme.success,
                  fontSize: '80px',
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                ✅
              </div>
              <h3 style={{ 
                color: theme.dark,
                marginBottom: '15px',
                fontWeight: 600
              }}>
                Votre ticket est prêt !
              </h3>
              
              <div style={{
                backgroundColor: theme.primaryLight,
                borderRadius: '12px',
                padding: '15px',
                margin: '20px auto',
                maxWidth: '300px',
                border: `2px dashed ${theme.primary}`
              }}>
                <p style={{ fontSize: '16px', margin: '0 0 10px 0', color: theme.gray }}>
                  Votre numéro de ticket est :
                </p>
                <span style={{ 
                  fontSize: '28px', 
                  fontWeight: 'bold', 
                  color: theme.primary,
                  letterSpacing: '1px',
                  display: 'block',
                  margin: '10px 0'
                }}>
                  {ticketNumber}
                </span>
              </div>
              
              <p style={{ fontSize: '16px', margin: '20px 0', color: theme.dark }}>
                Veuillez patienter, nous vous appellerons bientôt.
              </p>
              
              <div style={{
                backgroundColor: theme.light,
                borderRadius: '8px',
                padding: '15px',
                margin: '20px auto',
                maxWidth: '80%',
                border: `1px solid ${theme.border}`
              }}>
                <p style={{ color: theme.gray, margin: 0 }}>
                  Temps d'attente estimé : 
                  <strong style={{ color: theme.primary, marginLeft: '5px' }}>
                    environ {waitTime} minutes
                  </strong>
                </p>
              </div>
              
              <Button 
                appearance="primary" 
                onClick={handleConfirm} 
                style={{ 
                  marginTop: '30px',
                  backgroundColor: theme.success,
                  borderColor: theme.success,
                  padding: '10px 20px',
                  fontSize: '16px'
                }}
              >
                Terminer
              </Button>
            </div>
          </Fade>
        );
      
      default:
        return null;
    }
  };

  return (
    <div 
      className="ticket-wizard-container" 
      style={{ 
        maxWidth: '1000px', 
        margin: '0 auto', 
        padding: isMobile ? '10px' : '20px' 
      }}
    >
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '30px', 
        color: theme.primary,
        fontWeight: 700,
        fontSize: isMobile ? '24px' : '32px' 
      }}>
        Bienvenue dans notre service
      </h1>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        width: '100%'
      }}>
        {/* Wizard Steps - Vertical pour écran large, Horizontal pour petit écran */}
        <div style={{ 
          width: isMobile ? '100%' : '20%', 
          marginRight: isMobile ? 0 : '20px',
          marginBottom: isMobile ? '20px' : 0
        }}>
          <Steps 
            current={step} 
            vertical={!isMobile} // Vertical pour ordinateur, horizontal pour mobile
            small={isExtraSmall} // Petite taille pour les très petits écrans
          >
            <Steps.Item 
              title="Service" 
              description={isMobile ? "" : "Choisissez votre service"} 
              style={{ color: step === 0 ? getSelectedServiceColor() : undefined }}
            />
            <Steps.Item 
              title="Infos" 
              description={isMobile ? "" : "Vos coordonnées"} 
              style={{ color: step === 1 ? getSelectedServiceColor() : undefined }}
            />
            <Steps.Item 
              title="Résumé" 
              description={isMobile ? "" : "Vérifiez vos informations"} 
              style={{ color: step === 2 ? getSelectedServiceColor() : undefined }}
            />
            <Steps.Item 
              title="Terminé" 
              description={isMobile ? "" : "Récupérez votre ticket"} 
              style={{ color: step === 3 ? getSelectedServiceColor() : undefined }}
            />
          </Steps>
          
          {/* Indicateur de progression pour les écrans mobiles */}
          {isMobile && (
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              margin: '10px 0 20px',
              padding: '0 10px'
            }}>
              <span style={{ color: theme.gray, fontSize: '14px' }}>
                Étape {step + 1} sur 4
              </span>
              <span style={{ 
                color: getSelectedServiceColor(), 
                fontWeight: 500, 
                fontSize: '14px' 
              }}>
                {step === 0 && 'Choisir un service'}
                {step === 1 && 'Renseigner les informations'}
                {step === 2 && 'Vérifier le résumé'}
                {step === 3 && 'Ticket généré'}
              </span>
            </div>
          )}
        </div>
        
        {/* Contenu principal */}
        <div style={{ width: isMobile ? '100%' : '80%' }}>
          <Panel
            bordered
            style={{
              padding: isMobile ? '20px' : '30px',
              borderRadius: '16px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              minHeight: '400px',
              border: `1px solid ${theme.border}`,
              backgroundColor: 'white'
            }}
          >
            {renderStepContent()}
          </Panel>
        </div>
      </div>
      
      {/* Modal de confirmation */}
      <Modal
        open={showSuccess}
        onClose={handleReset}
        size="xs"
      >
        <Modal.Header>
          <Modal.Title>Merci pour votre visite</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ 
              fontSize: '50px', 
              marginBottom: '20px', 
              color: theme.success 
            }}>
              🎉
            </div>
            <p style={{ fontSize: '16px' }}>
              Votre demande a bien été enregistrée. Merci d'avoir utilisé notre service de tickets !
            </p>
            <p style={{ 
              fontSize: '14px', 
              marginTop: '15px', 
              color: theme.gray,
              fontStyle: 'italic'
            }}>
              Redirection automatique dans 2 secondes...
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button appearance="primary" onClick={handleReset} block>
            Nouveau ticket
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default VerticalTicketWizard;