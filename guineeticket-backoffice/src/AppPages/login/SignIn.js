// App.js - Composant principal
import React, { useState } from 'react';
import { Button, Panel, Container, Content, Header, Footer, ButtonToolbar, ButtonGroup } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import html2pdf from 'html2pdf.js';
import QCMQuestions from './questions';
import './styles.css';

const App = () => {
  const [activeKey, setActiveKey] = useState(null);
  const [showAnswers, setShowAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});
  const [expandAll, setExpandAll] = useState(false);

  // Lettres pour les options (de A à X)
  const optionLetters = 'ABCDEFGHIJKLMNOPQRSTUVWX';

  const handleSelect = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  const toggleAnswers = (id) => {
    setShowAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleExplanation = (id) => {
    setShowExplanation(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Afficher/masquer toutes les questions
  const toggleExpandAll = () => {
    if (expandAll) {
      setActiveKey(null);
    } else {
      // Ouvrir toutes les questions
      const questions = {};
      QCMQuestions.forEach(q => {
        questions[q.id] = true;
      });
      setActiveKey('all');
    }
    setExpandAll(!expandAll);
  };

  // Afficher/masquer toutes les réponses
  const toggleAllAnswers = (show) => {
    const answers = {};
    QCMQuestions.forEach(q => {
      answers[q.id] = show;
    });
    setShowAnswers(answers);
  };

  // Afficher/masquer toutes les explications
  const toggleAllExplanations = (show) => {
    const explanations = {};
    QCMQuestions.forEach(q => {
      explanations[q.id] = show;
    });
    setShowExplanation(explanations);
  };

  // Mode PDF - Affiche tout le contenu
  const prepareForPDF = () => {
    toggleAllAnswers(true);
    toggleAllExplanations(true);
    if (!expandAll) {
      toggleExpandAll();
    }
    
    // Petit délai pour laisser le DOM se mettre à jour
    setTimeout(() => {
      generatePDF();
    }, 500);
  };

  const generatePDF = () => {
    const element = document.getElementById('qcm-content');
    const opt = {
      margin: 10,
      filename: 'qcm-informatique-complet.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <Container className="qcm-container">
      <Header className="qcm-header">
        <h1>QCM d'Informatique</h1>
        <div className="header-controls">
          <Button appearance="primary" onClick={prepareForPDF} className="pdf-button">
            Télécharger en PDF complet
          </Button>
        </div>
      </Header>
      
      <div className="global-controls">
        <ButtonToolbar>
          <ButtonGroup>
            <Button 
              appearance="ghost" 
              onClick={toggleExpandAll}
            >
              {expandAll ? 'Masquer toutes les questions' : 'Afficher toutes les questions'}
            </Button>
          </ButtonGroup>
          
          <ButtonGroup>
            <Button 
              appearance="ghost" 
              onClick={() => toggleAllAnswers(true)}
            >
              Afficher toutes les réponses
            </Button>
            <Button 
              appearance="ghost" 
              onClick={() => toggleAllAnswers(false)}
            >
              Masquer toutes les réponses
            </Button>
          </ButtonGroup>
          
          <ButtonGroup>
            <Button 
              appearance="ghost" 
              onClick={() => toggleAllExplanations(true)}
            >
              Afficher toutes les explications
            </Button>
            <Button 
              appearance="ghost" 
              onClick={() => toggleAllExplanations(false)}
            >
              Masquer toutes les explications
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      
      <Content className="qcm-content" id="qcm-content">
        <div className="qcm-intro">
          <h2>Test de connaissances en informatique</h2>
          <p>Ce QCM couvre divers sujets liés à l'informatique, du développement web aux concepts avancés.</p>
        </div>
        
        {QCMQuestions.map((item) => (
          <Panel
            key={item.id}
            className="question-panel"
            header={`Question ${item.id}: ${item.question}`}
            collapsible
            expanded={expandAll || activeKey === item.id}
            onSelect={() => !expandAll && handleSelect(item.id)}
          >
            <div className="options-container">
              {item.options.map((option, index) => (
                <div
                  key={index}
                  className={`option ${showAnswers[item.id] && item.correctAnswer === index ? 'correct-answer' : ''}`}
                >
                  <span className="option-letter">{optionLetters[index]}.</span> {option}
                  {showAnswers[item.id] && item.correctAnswer === index && <span className="correct-badge">✓</span>}
                </div>
              ))}
            </div>
            <div className="button-container">
              <Button
                className="answer-button"
                appearance="subtle"
                onClick={() => toggleAnswers(item.id)}
              >
                {showAnswers[item.id] ? 'Masquer la réponse' : 'Afficher la réponse'}
              </Button>
              <Button
                className="explanation-button"
                appearance="subtle"
                onClick={() => toggleExplanation(item.id)}
                disabled={!showAnswers[item.id]}
              >
                {showExplanation[item.id] ? 'Masquer l\'explication' : 'Afficher l\'explication'}
              </Button>
            </div>
            {showExplanation[item.id] && showAnswers[item.id] && (
  <div className="explanation-box">
    <h4>Explication:</h4>
    <p>{item.explanation}</p>
    
    {item.examples && (
      <div className="examples-section">
        <h4>Exemples:</h4>
        <p>{item.examples}</p>
      </div>
    )}
    
    {item.usefulLinks && item.usefulLinks.length > 0 && (
      <div className="links-section">
        <h4>Liens utiles:</h4>
        <ul>
          {item.usefulLinks.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
)}
          </Panel>
        ))}
      </Content>
      <Footer className="qcm-footer">
        <p>© 2025 - QCM d'Informatique</p>
      </Footer>
    </Container>
  );
};

export default App;

// https://waytolearnx.com/2018/11/qcm-en-informatique-generale-partie-1.html