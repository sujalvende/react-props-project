import Card from "./component/Card.jsx";
import User from "./component/User.jsx";

const jobOpenings = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/originals/5a/62/70/5a62706bc5603694b1bd08acc40d3096.png",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://th.bing.com/th/id/R.c3ac08076933e815ef39557f89b47f9b?rik=YNSsRadQZQdQQQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-mPh7lr-L5kw%2fURx8FtZsRYI%2fAAAAAAAAAU8%2f1Rl4GwVdyhM%2fs1600%2fmicrosoft-logo%2b(1).jpg&ehk=r%2bxBCHuV9agjuFR%2b2LkIJJT0rYEqC%2fUFrlQHeoKN7Uk%3d&risl=&pid=ImgRaw&r=0",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/x",
    companyName: "X (Twitter)",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.IB2Vswm0mscDdkrIE7oTegHaFj?w=640&h=480&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Adobe",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$30/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/uber",
    companyName: "Uber",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/airbnb",
    companyName: "Airbnb",
    datePosted: "3 weeks ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "Remote"
  }
];

const App = () => {
    return (
        <div className="parent">
          {jobOpenings.map(function(elem,idx){
            return <div key={idx}>
              <Card logo={elem.brandLogo} 
            company={elem.companyName} 
            dateposted={elem.datePosted} 
            position={elem.post} 
            tag1={elem.tag1} 
            tag2={elem.tag2} 
            pay={elem.pay} 
            location={elem.location} />;
            </div>
          })}
        </div>
    )
}

export default App;