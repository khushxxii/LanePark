import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

/**
 * Renders a list of categories and the number of products in each category. Used for product list
 * view sidebars.
 */
const CategoriesSidebar = ({ categories, current, className }) => {
  // Check if categories is undefined or null and render a fallback UI
  if (!categories) {
    return <div className={className}>Loading categories...</div>;
  }

  return (
    <div className={className}>
      <h3 className="font-size-title font-weight-medium mb-3">Products</h3>
      <ul style={{ 'listStyleType': 'none' }} className="pl-0">
        {categories.map(category => (
          <li key={category.slug}>
            <Link href={`/collection#${category.slug}`}>
              <a
                style={{ fontWeight: current === category.id ? 'bold' : 'normal' }}
                className="pb-2 cursor-pointer font-color-black"
              >
                {category.name}<sup>{category.products}</sup>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Connect the component to Redux store and map categories state to props
export default connect(({ categories }) => ({ categories }))(CategoriesSidebar);
