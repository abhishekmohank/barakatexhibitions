const PageContainer = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 md:px-10 ${className}`}>
    {children}
  </div>
);

export default PageContainer;
