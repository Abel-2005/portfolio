import React from 'react';
import { PORTFOLIO_DATA } from '@/lib/data';

// This component is rendered off-screen and converted to PDF
export const CVTemplate = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { personal, education, experience, projects, skills, certifications } = PORTFOLIO_DATA;

  return (
    <div 
      ref={ref} 
      className="bg-white text-black p-10 font-sans w-[800px] absolute -left-[9999px]"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      {/* Header */}
      <div className="border-b-2 border-gray-300 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-1">{personal.name}</h1>
        <p className="text-xl text-gray-600 mb-3">{personal.role}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
          <span>📧 {personal.email}</span>
          <span>📱 {personal.phone}</span>
          <span>🔗 {personal.linkedin.split('in/')[1]}</span>
          <span>🐙 {personal.github.split('github.com/')[1]}</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2">Professional Summary</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{personal.bio}</p>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2">Education</h2>
        <div className="space-y-3">
          {education.map((edu, idx) => (
            <div key={idx}>
              <div className="flex justify-between font-bold text-gray-800 text-sm">
                <span>{edu.degree}</span>
                <span>{edu.period}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{edu.institution}</span>
                <span className="font-semibold">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2">Experience</h2>
        <div className="space-y-4">
          {experience.map((exp, idx) => (
            <div key={idx}>
              <div className="flex justify-between font-bold text-gray-800 text-sm">
                <span>{exp.role}</span>
                <span>{exp.period}</span>
              </div>
              <div className="text-sm text-gray-600 mb-1">{exp.company}</div>
              <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2">Projects</h2>
        <div className="space-y-4">
          {projects.map((proj, idx) => (
            <div key={idx}>
              <div className="flex justify-between font-bold text-gray-800 text-sm">
                <span>{proj.title}</span>
                <span>{proj.period}</span>
              </div>
              <p className="text-sm text-gray-700 mt-1 mb-1 leading-relaxed">{proj.description}</p>
              <div className="text-xs text-gray-500 italic">
                Tech Stack: {proj.techStack.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
          <div><span className="font-bold">Languages:</span> {skills.languages.map(s => s.name).join(", ")}</div>
          <div><span className="font-bold">Frameworks:</span> {skills.frameworks.map(s => s.name).join(", ")}</div>
          <div><span className="font-bold">Tools:</span> {skills.tools.map(s => s.name).join(", ")}</div>
          <div><span className="font-bold">Core CS:</span> {skills.core.map(s => s.name).join(", ")}</div>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2">Certifications</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {certifications.map((cert, idx) => (
            <li key={idx}>
              <span className="font-semibold">{cert.title}</span> - {cert.issuer} ({cert.date})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

CVTemplate.displayName = "CVTemplate";
