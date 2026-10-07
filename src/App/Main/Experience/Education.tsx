const education = [
  {
    date: "August 2027",
    school: "Carnegie Mellon University, Pittsburgh PA",
    details: ["Masters in Human Computer Interaction"],
  },
  {
    date: "May 2023",
    school: "Wesleyan University, Middletown CT",
    details: [
      "Bachelor of Arts",
      "(Major) Computer Science",
      "(Minor) Graphic Design and College of East Asian Studies",
    ],
  },
  {
    date: "June 2019",
    school: "Phillips Academy Andover, Andover MA",
    details: ["Recipient of Phillips Academy Dance Award 2018–2019"],
  },
]

const Education = (): JSX.Element => (
  <section
    className="experience-panel experience-education"
    aria-labelledby="education-title"
  >
    <h2 id="education-title">Education</h2>
    <div className="experience-rows">
      {education.map(item => (
        <div className="experience-row" key={item.date}>
          <p className="experience-date">{item.date}</p>
          <div>
            <h3 className="experience-organization">{item.school}</h3>
            {item.details.map(detail => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Education
