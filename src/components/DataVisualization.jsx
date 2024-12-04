import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


export default function DataVisualization({ type, data }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => setIsExpanded(!isExpanded)

  const renderContent = () => {
    switch (type) {
      case 'image':
        return (
          <div className="relative" style={{ width: '100%', height: '200px' }}>
            <img
              src={data.url}
              alt={data.alt || 'Shared image'}
              className="rounded-lg cursor-pointer object-cover w-full h-full"
              onClick={toggleExpand}
            />
          </div>
        )
      case 'table':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-gray-100 dark:bg-gray-600">
                <tr>
                  {data.headers.map((header, index) => (
                    <th key={index} className="px-4 py-2 text-left">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : ''}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-2">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      case 'file':
        return (
          <a
            href={data.url}
            download={data.name}
            className="text-blue-500 hover:text-blue-600 underline"
          >
            Download {data.name}
          </a>
        )
      default:
        return <p>Unsupported data type</p>
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="mt-2"
    >
      {renderContent()}
      <AnimatePresence>
        {isExpanded && type === 'image' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={toggleExpand}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative"
              style={{ width: '80vw', height: '80vh' }}
            >
              <img
                src={data.url}
                alt={data.alt || 'Shared image'}
                className="object-contain w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
