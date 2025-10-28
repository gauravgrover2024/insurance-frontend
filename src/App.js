{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState, useEffect \} from 'react';\
\
function App() \{\
  const [cases, setCases] = useState([]);\
  const [form, setForm] = useState(\{ name: "", mobile: "" \});\
\
  useEffect(() => \{\
    fetch('https://your-api.onrender.com/api/cases')\
      .then(res => res.json())\
      .then(setCases);\
  \}, []);\
\
  function handleChange(e) \{\
    setForm(\{ ...form, [e.target.name]: e.target.value \});\
  \}\
\
  function handleSubmit(e) \{\
    e.preventDefault();\
    fetch('https://your-api.onrender.com/api/cases', \{\
      method: "POST",\
      headers: \{ "Content-Type": "application/json" \},\
      body: JSON.stringify(form)\
    \})\
      .then(res => res.json())\
      .then(caseObj => setCases([...cases, caseObj]));\
  \}\
\
  return (\
    <div>\
      <h1>Insurance Cases</h1>\
      <form onSubmit=\{handleSubmit\}>\
        <input name="name" placeholder="Name" value=\{form.name\} onChange=\{handleChange\} required />\
        <input name="mobile" placeholder="Mobile" value=\{form.mobile\} onChange=\{handleChange\} required />\
        <button type="submit">Add Case</button>\
      </form>\
      <ul>\
        \{cases.map(c => (\
          <li key=\{c._id\}>\{c.name\} - \{c.mobile\}</li>\
        ))\}\
      </ul>\
    </div>\
  );\
\}\
\
export default App;\
}