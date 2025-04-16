
const courses = [
  {
      code: 'SE101',
      name: 'Software Project Management',
      professor: 'Prof.Kristin',
      bigLetter: 'F',
      smallLetter: 'F',
      button: 'Makeup Detials',
      result: 'FF'
      
  },
  {
      code: 'SE102',
      name: 'Data Structures and Algorithms',
      professor: 'Prof.Johnson',
      bigLetter: 'D',
      smallLetter: 'C',
      button: 'Makeup Detials',
      result: 'DC'
      
  },
  {
      code: 'SE103',
      name: 'Database Systems',
      professor: 'Prof.Davis',
      bigLetter: 'A',
      smallLetter: 'A',
      button: 'Makeup Detials',
      result: 'AA'
      
  },
  {
      code: 'SE104',
      name: 'Web Development',
      professor: 'Prof.Miller',
      bigLetter: 'F',
      smallLetter: 'F',
      button: 'Makeup Detials',
      result: 'FF'
      
  },
  {
      code: 'SE105',
      name: 'Operating Systems',
      professor: 'Prof.Smith',
      bigLetter: 'A',
      smallLetter: 'A',
      button: 'Makeup Detials',
      result: 'AA'
      
  },
  {
    code: 'SE106',
    name: 'Operating Systems',
    professor: 'Prof.Smith',
    bigLetter: 'A',
    smallLetter: 'A',
    button: 'Makeup Detials',
    result: 'AA'
}
];


const coursesContainer = document.getElementById('courses-container');


courses.forEach(course => {
  const courseDiv = document.createElement('div');
  courseDiv.classList.add('course');
  
  courseDiv.innerHTML = `
      
      <div class="course-info">
                <div class="cour-upper-part">

                  <div class="cour-left">
                <div class="course-code">${course.code}</div>
                <div class="course-info-right">
                  <div class="course-name">${course.name}</div>
                  <div class="course-prof">${course.professor}</div>
                 </div>
                </div>
                <div class="cour-result-${course.result}"><span class="bigLetter">${course.bigLetter}</span><span class="smallLetter">${course.smallLetter}</span></div>
              </div>

              <div class="cour-bottom-part">
                <div class="info-button"><i class="fi fi-br-file-circle-info"></i>
                </div>
                <button>${course.button}</button>
              </div>
              </div>
  `;
  
 
  coursesContainer.appendChild(courseDiv);
});
