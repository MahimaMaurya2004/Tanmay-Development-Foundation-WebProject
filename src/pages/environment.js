import "../styles/environment.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Environment() {
  return (
    <div className="App">
     <Header/>
      <main className="main-content">
        <h1 className="gallery-title">Environment</h1>
        <div className="first-green-bar"></div>
        <img
          src="images/environmentImage1.png"
          alt="environment-image"
          className="environment-image"
        ></img>
        <div className="second-green-bar"></div>
        <h1>What we do ?</h1>
        <p>
          We seek to improve the quality of life of vulnerable people in
          different communities. To ensure that, the organization promotes
          conservation of flora, fauna and natural resources with active citizen
          engagement as its inevitable for protectiong and restoring the
          environment.
        </p>
        <p>
          TDF also works for biodiversity, combating desertification, waste
          management, air, water and soil pollution etc. As the world is
          witnessing climate change and its devastation, we work to capacitate
          and make resilient communities to fight with climatic adversity
          affecting their lives.
        </p>
        <h1>Our mission:</h1>
        <p>
          We seek to improve the quality of the life for vulnerable individuals
          in diverse communities. To achieve this, we actively promote the
          conservation of flora and natural resources. we believe that citizen
          engagement is crucial for protecting and restoring our environment.
        </p>
        <h1>Our Vision:</h1>
        <p>
          To create a world where every community thrives in harmony with nature
          , empowered to protect and suatain their environment for future
          generation
        </p>
        <img
          src="images/people-sitting-together.jpg"
          alt="environment-image"
          className="environment-curved-image"
        ></img>
        <h1>Our Focus Area</h1>
        <h1>Biodiversity Conservation:</h1>
        <p>
          Our efforts are dedicated to presserving the rich biodiversity of our
          planet. We work on various aimed at protectiong endangered species,
          restoring habitats, and maintaining ecological balance. By eduacating
          and involving local communities, we ensure sustainable practices that
          benefit both people and wildlife.
        </p>
        <h1>Combating Desertification:</h1>
        <p>
          Desertification is a critical issue affecting many vulnerable
          communities. We implement sustainable land management practices to
          combat soil erosion and land degradation. Our reforestation projects
          and sustainable agriculture initiatives help restore degradedd lands
          and improve food security.
        </p>
        <h1>Waste Management:</h1>
        <p>
          Effective waste management is essential for a clean and healthy
          environment. We promote recycling, composting, and responsible waste
          disposal practices. Through community education and infrastructure
          development, we aim to reduce waste and its impact on the environment
        </p>
        <h1>Pollution Control:</h1>
        <p>
          Pollution of air,waste and soil poses significant risks to human
          health and the environment. We conduct awareness campaigns and
          implements projects to reduce pollution levels. Our initiatives
          include clean-up drives, advocacy for stricter regulations and support
          for green technologies.
        </p>
        <h1>Citizen Engagement:</h1>
        <p>
          Active citizen engagement is at the heart of our mission. We believe
          that community involvement is essential for sustainable environmental
          protection. We organize workshops, community meetings, and volunteer
          programs to foster a sense of responsibility and ownership among
          citizens.
        </p>
        <h1>Building Resilient Communities:</h1>
        <p>
          As the world witnesses the increasing impacts of climate change, we
          focus on building the resilience of vulnerable communities. We provide
          training and resources to help communities adapt to climate
          variability and extreme weather events. Our programs include disaster
          preparedness, climate-smart agriculture, and sustainalbe livelihoods.
        </p>
      </main>
     <Footer/>
    </div>
  );
}
export default Environment;
