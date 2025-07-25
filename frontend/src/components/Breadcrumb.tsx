import { Link } from 'react-router-dom';

type BreadcrumbItem = {
  label: string;
  path: string;
  isActive?: boolean;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="max-w-6xl mx-auto pt-4 pb-2 text-sm text-gray-500 flex items-center gap-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <span className="mx-1">/</span>}
          {item.isActive ? (
            <span className="text-gray-800 font-medium">{item.label}</span>
          ) : (
            <Link to={item.path} className="hover:text-blue-600 transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;