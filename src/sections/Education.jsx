import { education } from '../constants/index.js';

const Education = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Education/Certificates</h3>
      
      <div className="education-container">
        {education.map((item) => (
          <div key={`review-${item.id}`} className="education-review">
            <div>
              <div className="education-content">
                <div className="flex gap-3">
                  <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">{item.position}</p>
                  </div>
                </div>
              </div>
            </div>
              <p className="text-white-800 font-light">{item.attained}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
