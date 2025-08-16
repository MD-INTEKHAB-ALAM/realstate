import React from 'react';
import Card from './Card';
import propertyData from '@/utils/PropertyData';

function CardList() {
  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {propertyData.map((property, index) => (
          <Card key={index} {...property} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
