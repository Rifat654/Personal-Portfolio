const Service = () => {
   
    const services = [
        { title: "Custom Website Development", description: "Build modern, responsive, and high-performance websites from scratch." },
        { title: "React.js Development", description: "Develop scalable and interactive web applications using React.js." },
        { title: "UI/UX Design Implementation", description: "Convert Figma, Adobe XD, or Sketch designs into pixel-perfect UI." },
        { title: "Performance Optimization", description: "Improve site speed, SEO, and accessibility for a better user experience." },
        { title: "Responsive Web Design", description: "Ensure your website looks great on all screen sizes and devices." },
        { title: "API Integration", description: "Seamlessly connect your frontend with backend services and third-party APIs." }
      ];

  return (
    <div id="services" className="py-16 ">
    <h2 className="text-3xl font-bold text-center mb-6"> Services</h2>
    <div className="w-full px-4 sm:px-0 sm:w-[70%] container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div key={index} className=" border-gray-700 border p-6 rounded-2xl shadow-lg hover:shadow-md transition duration-300 cursor-pointer hover:shadow-slate-500 ">
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Service
