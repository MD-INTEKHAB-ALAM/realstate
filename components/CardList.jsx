import React from 'react'
import Card from './Card'
import propertyData from '@/utils/PropertyData'
function CardList() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto my-12">
      {propertyData.map((property, index) => (
        <Card key={index} {...property} />
      ))}
    </div>
  )
}

export default CardList