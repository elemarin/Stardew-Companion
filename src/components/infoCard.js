export default function InfoCard({ info }) {

    if (!info || !info.name) return null;
    
    const imagePath = `./../${info.image}`; // Update the image path here
    const tags = Object.keys(info).filter(prop => prop !== 'image' && prop !== 'name');
  
    return (
      <div className="card border rounded p-3 mt-3 w-100" style={{maxWidth: "540px"}}>
        <div className="row">
          <div className="col col-4">
            <img src={imagePath} className="card-img-top" alt="..." />
          </div>
          <div className="col col-8">
            <div className="card-body">
              <h2 className="card-title">{info.name}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex flex-column justify-content-between">
            <div className="d-flex flex-wrap mt-4">
             {console.log(tags)}
              {tags.map((key, index) => (
                  <span key={index} className="badge bg-light border border-secondary rounded-pill text-secondary py-2 px-3 m-1">{info[key]}</span>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }