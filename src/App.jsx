import React, { useState } from 'react';
import { Search, Plus, Hash, FileText, Settings, Activity, Trash2, Save } from 'lucide-react';

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'INSTAREACT_STRATEGY', content: 'Phase 1: Radar Relay Setup\nPhase 2: Spatial Health OS integration.', category: 'PLANNING' },
    { id: 2, title: 'MYCIPHER_CORE', content: 'Recursive deployment engine is stable on VPS.', category: 'INFRA' }
  ]);
  const [activeNote, setActiveNote] = useState(notes[0]);

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#030303', color: '#00ff41', fontFamily: 'monospace' }}>
      <aside style={{ width: '64px', borderRight: '1px solid #222', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0', gap: '30px' }}>
        <Activity size={24} />
        <Plus size={24} style={{ cursor: 'pointer' }} onClick={() => {
          const newNote = { id: Date.now(), title: 'NEW_RECORD', content: '', category: 'GENERAL' };
          setNotes([newNote, ...notes]);
          setActiveNote(newNote);
        }} />
        <FileText size={20} className="opacity-40" />
        <div style={{ marginTop: 'auto', marginBottom: '20px' }}>
          <Settings size={20} className="opacity-40" />
        </div>
      </aside>

      <main style={{ width: '350px', borderRight: '1px solid #222', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #222' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: '#111', padding: '10px', borderRadius: '4px' }}>
            <Search size={16} style={{ marginRight: '10px', opacity: 0.4 }} />
            <input placeholder="SEARCH_RECORDS..." style={{ background: 'transparent', border: 'none', color: '#00ff41', outline: 'none', width: '100%' }} />
          </div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {notes.map(note => (
            <div key={note.id} onClick={() => setActiveNote(note)} style={{ 
              padding: '20px', 
              borderBottom: '1px solid #111', 
              cursor: 'pointer', 
              background: activeNote?.id === note.id ? '#0a0a0a' : 'transparent'
            }}>
              <div style={{ fontSize: '12px', fontWeight: 'bold' }}>{note.title}</div>
              <div style={{ fontSize: '10px', opacity: 0.4, marginTop: '5px' }}>{note.content.substring(0, 40)}...</div>
            </div>
          ))}
        </div>
      </main>

      <section style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{ padding: '20px', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', letterSpacing: '2px' }}>CONVO_NOTES / ENGINE_V1.0</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Trash2 size={18} style={{ opacity: 0.4, cursor: 'pointer' }} />
            <Save size={18} style={{ cursor: 'pointer' }} />
          </div>
        </header>
        <div style={{ flex: 1, padding: '60px', display: 'flex', flexDirection: 'column' }}>
          <input 
            value={activeNote?.title}
            onChange={(e) => setActiveNote({...activeNote, title: e.target.value})}
            style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '40px', fontWeight: 'bold', outline: 'none', marginBottom: '40px' }}
          />
          <textarea 
            value={activeNote?.content}
            onChange={(e) => setActiveNote({...activeNote, content: e.target.value})}
            placeholder="INITIATE_CAPTURE..."
            style={{ flex: 1, background: 'transparent', border: 'none', color: '#888', fontSize: '18px', outline: 'none', resize: 'none', lineHeight: '1.6' }}
          />
        </div>
      </section>
    </div>
  );
};

export default App;