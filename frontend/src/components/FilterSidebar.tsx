import { useState } from 'react';

const filterSections = [
  {
    label: 'Age Group',
    options: ['2 - 5 years', '5 - 8 years', '8 - 12 years'],
    defaultChecked: ['5 - 8 years'],
  },
  {
    label: 'Frame Color',
    options: ['Black', 'Blue', 'Silver', 'Grey', 'Gold', 'Gun Metal', 'Transparent', 'Brown', 'Pink', 'Green', 'Purple'],
    defaultChecked: ['Blue'],
  },
  {
    label: 'Frame Size',
    options: ['Narrow', 'Medium', 'Wide', 'Extra Wide'],
    defaultChecked: ['Medium'],
  },
  {
    label: 'Brands',
    options: ['Wonder Eyewear', 'Wonder 24 Carat', 'William Style', 'Alex', 'Milli', 'Tom Harry', 'Visate', 'Smart Kids'],
    defaultChecked: ['Wonder 24 Carat'],
  },
  {
    label: 'Price',
    options: ['All Price', '0 - 99', '100 - 199', '200 - 299', '300 - 399', '400+'],
    defaultChecked: [],
  },
  {
    label: 'Gender',
    options: ['Women', 'Men', 'Kids'],
    defaultChecked: ['Men'],
  },
];

const FilterSidebar = () => {
  const [expanded, setExpanded] = useState(Array(filterSections.length).fill(false));
  const [allOpen, setAllOpen] = useState(false);

  const toggleSection = (idx: number) => {
    setExpanded(expanded => expanded.map((v, i) => (i === idx ? !v : v)));
  };

  const handleToggleAll = () => {
    setAllOpen(open => {
      setExpanded(Array(filterSections.length).fill(!open));
      return !open;
    });
  };

  return (
    <aside className="w-64 bg-white rounded-2xl shadow-md p-6 mr-8 h-fit">
      <div className="flex items-center justify-between mb-5">
        <span className="font-semibold text-lg">Filter</span>
        <button
          className="text-blue-600 text-sm font-medium border border-blue-600 rounded px-2 py-1 hover:bg-blue-50 transition"
          onClick={handleToggleAll}
        >
          {allOpen ? 'Collapse All' : 'Expand All'}
        </button>
      </div>
      {filterSections.map((section, idx) => (
        <div key={section.label} className="mb-5">
          <div
            className="flex justify-between items-center cursor-pointer font-medium mb-2"
            onClick={() => toggleSection(idx)}
          >
            <span>{section.label}</span>
            <span>{expanded[idx] ? '▲' : '▼'}</span>
          </div>
          {expanded[idx] && (
            <div className="pl-2 max-h-32 overflow-y-auto">
              {section.options.map(option => (
                <div key={option}>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      defaultChecked={section.defaultChecked.includes(option)}
                      className="accent-blue-600"
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default FilterSidebar; 