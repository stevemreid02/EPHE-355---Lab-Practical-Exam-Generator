import React, { useState, useRef } from 'react';
import { RefreshCw, Download, ChevronDown } from 'lucide-react';

const LabPracticalGenerator = () => {
  const [practical, setPractical] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    palpation: true,
    muscles: true,
    stretch: true,
    strength: true,
  });
  const practicalRef = useRef(null);

  // Data
  const palpationPoints = [
    "AC joint", "SC joint", "Lateral border of the scapula",
    "medial border of the scapula", "Superior angle of the scapula",
    "Inferior angle of the scapula", "Spine of the Scapula",
    "Root of the Spine of the Scapula", "Acromion process of the scapula bone",
    "Coracoid process of the scapula", "Greater Tubercle of the Humerus",
    "Lesser Tubercle of the Humerus", "Manubrium", "Body of the sternum",
    "Intertubercular/Bicipital Groove of the Humerus", "Lateral Epicondyle of the Humerus",
    "Medial Epicondyle of the Humerus", "Ulnar Groove of the Humerus",
    "Head of the Radius Bone", "Olecranon Process of the Ulna Bone",
    "Head of the Ulna", "Styloid Process of the Ulna", "Styloid Process of the Radius",
    "Lister's Tubercle", "Base of the metacarpal bone", "Body of the metacarpal bone",
    "Head of the metacarpal bone", "Base of the phalange bone",
    "Body of the phalange bone", "Head of the phalange bone",
    "Scaphoid carpal bone", "pisiform carpal bone", "triquitrum carpal bone",
    "iliac crest", "Anterior Superior Iliac Crest", "Posterior Superior Iliac Crest",
    "Greater Trochanter of femur bone", "Ischial Tuberosity (on self)",
    "Patella", "Patellar Tendon", "Tibial Plateau", "Head of Fibula",
    "Tibial Tuberosity", "Femoral epicondyle", "Femoral condyle",
    "Medial Malleolus", "Lateral Malleolus", "Dome of the Talus", "Achilles Tendon"
  ];

  const muscleBank = {
    "Upper Trapezius": { stretch: true, strength: true, self: true, assisted: true },
    "Levator Scapulae": { stretch: true, strength: false, self: true, assisted: true },
    "Pectoralis Minor": { stretch: true, strength: false, self: true, assisted: true },
    "Middle Trapezius": { stretch: false, strength: true, self: false, assisted: false },
    "Rhomboids (Maj and Min)": { stretch: false, strength: true },
    "Lower Trapezius": { stretch: false, strength: true },
    "Serratus Anterior": { stretch: false, strength: true },
    "Supraspinatus": { stretch: false, strength: true },
    "Infraspinatus": { stretch: false, strength: true },
    "Teres Minor": { stretch: false, strength: true },
    "Subscapularis": { stretch: false, strength: true },
    "Anterior Deltoid": { stretch: false, strength: true },
    "Middle Deltoid": { stretch: false, strength: true },
    "Posterior Deltoid": { stretch: false, strength: true },
    "Pectoralis Major": { stretch: true, strength: false, self: true, assisted: true },
    "Latissimus Dorsi": { stretch: true, strength: false, self: true, assisted: true },
    "Teres Major": { stretch: true, strength: false, self: true, assisted: true },
    "Biceps Brachii": { stretch: true, strength: true, self: true, assisted: true },
    "Brachialis": { stretch: true, strength: true, self: true, assisted: true },
    "Brachioradialis": { stretch: false, strength: true, self: false, assisted: false },
    "Triceps Brachii": { stretch: true, strength: true, self: true, assisted: true },
    "Pronator Teres": { stretch: true, strength: true, self: true, assisted: true },
    "Pronator Quadratus": { stretch: true, strength: true, self: true, assisted: true },
    "Supinator": { stretch: true, strength: true, self: true, assisted: true },
    "Flexor Carpi Radialis": { stretch: true, strength: true, self: true, assisted: true },
    "Flexor Carpi Ulnaris": { stretch: true, strength: true, self: true, assisted: true },
    "Extensor Carpi Radialis Longus": { stretch: false, strength: true },
    "Extensor Carpi Radialis Brevis": { stretch: false, strength: true },
    "Extensor Carpi Ulnaris": { stretch: false, strength: true },
    "Iliacus": { stretch: true, strength: true, self: true, assisted: true },
    "Psoas Major": { stretch: true, strength: true, self: true, assisted: true },
    "Rectus Femoris": { stretch: true, strength: true, self: true, assisted: true },
    "Tensor Fascia Latae": { stretch: true, strength: true, self: true, assisted: true },
    "Gluteus Maximus": { stretch: true, strength: true, self: true, assisted: false },
    "Semitendinosus": { stretch: true, strength: true, self: true, assisted: true },
    "Semimembranosus": { stretch: true, strength: true, self: true, assisted: true },
    "Biceps Femoris": { stretch: true, strength: true, self: true, assisted: true },
    "Gluteus Medius": { stretch: true, strength: true, self: true, assisted: false },
    "Gluteus Minimus": { stretch: true, strength: true, self: true, assisted: false },
    "Pectineus": { stretch: true, strength: true, self: true, assisted: false },
    "Adductor Brevis": { stretch: true, strength: true, self: true, assisted: false },
    "Adductor Longus": { stretch: true, strength: true, self: true, assisted: false },
    "Adductor Magnus": { stretch: true, strength: true, self: true, assisted: false },
    "Gracilis": { stretch: true, strength: true, self: true, assisted: false },
    "Piriformis": { stretch: true, strength: true, self: true, assisted: true },
    "Vastus Lateralis": { stretch: true, strength: true, self: true, assisted: true },
    "Vastus Medialis": { stretch: true, strength: true, self: true, assisted: true },
    "Vastus Intermedius": { stretch: true, strength: true, self: true, assisted: true },
    "Tibialis Anterior": { stretch: true, strength: true, self: true, assisted: true },
    "Tibialis Posterior": { stretch: true, strength: true, self: true, assisted: true },
    "Peroneus/fibularis longus": { stretch: true, strength: true, self: true, assisted: true },
    "Peroneus/fibularis brevis": { stretch: true, strength: true, self: true, assisted: true },
    "Gastrocnemius": { stretch: true, strength: true, self: true, assisted: true },
    "Soleus": { stretch: true, strength: true, self: true, assisted: true }
  };

  const grades = ["2", "3", "4"];

  const generatePractical = () => {
    const allMuscles = Object.keys(muscleBank);
    
    // Get stretch and strength muscles (guaranteed different)
    const stretchPool = allMuscles.filter(m => muscleBank[m].stretch);
    const stretchMuscle = stretchPool[Math.floor(Math.random() * stretchPool.length)];
    
    const strengthPool = allMuscles.filter(m => muscleBank[m].strength && m !== stretchMuscle);
    const strengthMuscle = strengthPool[Math.floor(Math.random() * strengthPool.length)];
    
    // Get random palpation muscles
    const palMuscle1 = allMuscles[Math.floor(Math.random() * allMuscles.length)];
    const palMuscle2 = allMuscles.filter(m => m !== palMuscle1)[Math.floor(Math.random() * (allMuscles.length - 1))];
    
    // Get palpation points
    const points = [];
    const pointsCopy = [...palpationPoints];
    points.push(pointsCopy[Math.floor(Math.random() * pointsCopy.length)]);
    pointsCopy.splice(pointsCopy.indexOf(points[0]), 1);
    points.push(pointsCopy[Math.floor(Math.random() * pointsCopy.length)]);
    
    // Get stretch type
    const stretchTypes = [];
    if (muscleBank[stretchMuscle].self) stretchTypes.push("self");
    if (muscleBank[stretchMuscle].assisted) stretchTypes.push("assisted");
    const stretchType = stretchTypes[Math.floor(Math.random() * stretchTypes.length)];
    const stretchPhrase = stretchType === "assisted" ? "an assisted" : "a self";
    
    // Get grade
    const grade = grades[Math.floor(Math.random() * grades.length)];
    
    setPractical({
      palpationPoint1: points[0],
      palpationPoint2: points[1],
      palMuscle1,
      palMuscle2,
      stretchMuscle,
      stretchPhrase,
      strengthMuscle,
      grade,
    });

    setExpandedSections({
      palpation: true,
      muscles: true,
      stretch: true,
      strength: true,
    });
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const downloadAsWord = async () => {
    if (!practical) return;
    
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [
            {
              role: "user",
              content: `Generate a Word document (.docx) in Base64 format with the following lab practical evaluation. Use the Python docx library format. Include these sections:

Palpation Points:
- ${practical.palpationPoint1}
- ${practical.palpationPoint2}

Describe & show the origin, course, insertion, innervation, and demonstrate the action/s of the following muscles:
- ${practical.palMuscle1}
- ${practical.palMuscle2}

Demonstrate ${practical.stretchPhrase} stretch of the following muscle and describe principles of stretching:
- ${practical.stretchMuscle}

Demonstrate an exercise to strengthen the following muscle at Grade ${practical.grade} and describe principles of strengthening:
- ${practical.strengthMuscle}

Return ONLY the base64-encoded .docx file content, no other text.`
            }
          ]
        })
      });

      const data = await response.json();
      const base64Content = data.content[0].text;
      
      const byteCharacters = atob(base64Content);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Lab_Practical.docx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert('Error downloading file. Please try again.');
      console.error(error);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', padding: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            background: 'linear-gradient(to right, #e0f2fe, #bae6fd)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem',
            fontFamily: 'Georgia, serif',
            letterSpacing: '-1px'
          }}>
            Lab Practical Generator
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#cbd5e1',
            fontFamily: 'Segoe UI, Tahoma, sans-serif',
            fontWeight: '300'
          }}>
            EPHE 355 — Kinesiology Assessment & Palpation
          </p>
        </div>

        {/* Generate Button */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <button
            onClick={generatePractical}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2rem',
              fontSize: '1.05rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '0.75rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 15px 40px rgba(6, 182, 212, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(6, 182, 212, 0.3)';
            }}
          >
            <RefreshCw size={20} />
            Generate New Practical
          </button>
        </div>

        {/* Practical Display */}
        {practical && (
          <div
            ref={practicalRef}
            style={{
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(100, 200, 220, 0.2)',
              borderRadius: '1rem',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              animation: 'slideIn 0.5s ease-out',
            }}
          >
            {/* Palpation Points */}
            <SectionCard
              title="Palpation Points"
              section="palpation"
              expanded={expandedSections.palpation}
              toggle={toggleSection}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <PalpationItem number="1" point={practical.palpationPoint1} />
                <PalpationItem number="2" point={practical.palpationPoint2} />
              </div>
            </SectionCard>

            {/* Palpation Muscles */}
            <SectionCard
              title="Muscle Palpation & Analysis"
              section="muscles"
              expanded={expandedSections.muscles}
              toggle={toggleSection}
            >
              <p style={{ color: '#94a3b8', marginBottom: '1rem', fontSize: '0.95rem' }}>
                Describe & show the origin, course, insertion, innervation, and demonstrate the action/s:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <MuscleItem name={practical.palMuscle1} />
                <MuscleItem name={practical.palMuscle2} />
              </div>
            </SectionCard>

            {/* Stretch */}
            <SectionCard
              title="Stretching Demonstration"
              section="stretch"
              expanded={expandedSections.stretch}
              toggle={toggleSection}
            >
              <p style={{ color: '#94a3b8', marginBottom: '1rem', fontSize: '0.95rem' }}>
                Demonstrate {practical.stretchPhrase} stretch and describe stretching principles:
              </p>
              <MuscleItem name={practical.stretchMuscle} highlight="emerald" />
            </SectionCard>

            {/* Strength */}
            <SectionCard
              title="Strength Testing"
              section="strength"
              expanded={expandedSections.strength}
              toggle={toggleSection}
            >
              <p style={{ color: '#94a3b8', marginBottom: '1rem', fontSize: '0.95rem' }}>
                Demonstrate exercise at <span style={{ fontWeight: '700', color: '#fbbf24' }}>Grade {practical.grade}</span> and describe strengthening principles:
              </p>
              <MuscleItem name={practical.strengthMuscle} highlight="amber" />
            </SectionCard>

            {/* Download Button */}
            <button
              onClick={downloadAsWord}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: '1rem',
                marginTop: '1.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                background: 'rgba(34, 197, 94, 0.15)',
                color: '#86efac',
                border: '2px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(34, 197, 94, 0.25)';
                e.target.style.borderColor = 'rgba(34, 197, 94, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(34, 197, 94, 0.15)';
                e.target.style.borderColor = 'rgba(34, 197, 94, 0.3)';
              }}
            >
              <Download size={20} />
              Download as Word Document
            </button>
          </div>
        )}

        {/* Empty State */}
        {!practical && (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            color: '#64748b',
            fontSize: '1.05rem',
          }}>
            <p style={{ marginBottom: '1rem' }}>Click the button above to generate your first practical evaluation.</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

// Section Card Component
const SectionCard = ({ title, section, expanded, toggle, children }) => (
  <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(100, 200, 220, 0.1)' }}>
    <button
      onClick={() => toggle(section)}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.25rem 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#e0f2fe',
        fontSize: '1.1rem',
        fontWeight: '600',
      }}
    >
      <span>{title}</span>
      <ChevronDown
        size={24}
        style={{
          transition: 'transform 0.3s ease',
          transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
          color: '#06b6d4',
        }}
      />
    </button>
    {expanded && (
      <div style={{ paddingBottom: '1.25rem', animation: 'slideIn 0.3s ease-out' }}>
        {children}
      </div>
    )}
  </div>
);

// Palpation Item Component
const PalpationItem = ({ number, point }) => (
  <div style={{
    padding: '1rem',
    background: 'rgba(6, 182, 212, 0.08)',
    border: '1px solid rgba(6, 182, 212, 0.3)',
    borderRadius: '0.5rem',
  }}>
    <div style={{ fontSize: '0.85rem', color: '#7dd3fc', fontWeight: '600', marginBottom: '0.5rem' }}>
      Point {number}
    </div>
    <div style={{ color: '#e0f2fe', fontSize: '1rem', fontWeight: '500' }}>
      {point}
    </div>
  </div>
);

// Muscle Item Component
const MuscleItem = ({ name, highlight }) => {
  const bgColor = highlight === 'emerald' ? 'rgba(16, 185, 129, 0.08)' : highlight === 'amber' ? 'rgba(251, 191, 36, 0.08)' : 'rgba(6, 182, 212, 0.08)';
  const borderColor = highlight === 'emerald' ? 'rgba(16, 185, 129, 0.3)' : highlight === 'amber' ? 'rgba(251, 191, 36, 0.3)' : 'rgba(6, 182, 212, 0.3)';
  const textColor = highlight === 'emerald' ? '#a7f3d0' : highlight === 'amber' ? '#fcd34d' : '#bae6fd';

  return (
    <div style={{
      padding: '1rem',
      background: bgColor,
      border: `1px solid ${borderColor}`,
      borderRadius: '0.5rem',
    }}>
      <div style={{ color: textColor, fontSize: '1rem', fontWeight: '500' }}>
        {name}
      </div>
    </div>
  );
};

export default LabPracticalGenerator;