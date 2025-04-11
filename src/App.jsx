import { useState } from "react"

function App(){
    const [info,setInfo] = useState({})
    const [sent,setSent] = useState(false)
    function handleSubmit(e){
        e.preventDefault()
        setSent(true)
    }

    function handleEdit(){
        if(sent){
            setSent(false)
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <GeneralInfo sent={sent}></GeneralInfo>
                <EducationInfo sent={sent}></EducationInfo>
                <EmploymentInfo sent={sent}></EmploymentInfo>
                <button onClick={handleEdit} type="button">Edit</button>
                <button disabled={sent} type="submit" >Submit</button>
            </form>

        </div>
       
    
)
}

function Info({fields, sent}){
    
}

function GeneralInfo({sent}) {
    const [generalInfo,setGeneralInfo] = useState({name:"",email:"",phone:""})
    function handleChange(e,field){
        let value = e.target.value
        setGeneralInfo({...generalInfo,[field]:value})
    }
    return (

        <div>
            <h2>General Information</h2>
            <div>
                <input type="text" placeholder="Name" value={generalInfo.name} onChange={(e)=>handleChange(e,"name")} disabled={sent}/>
                <input type="email" placeholder="Email" value={generalInfo.email}  onChange={(e)=>handleChange(e,"email")} disabled={sent}/>
                <input type="tel" placeholder="Phone" value={generalInfo.phone} onChange={(e)=>handleChange(e,"phone")} disabled={sent}/>
            </div>
            <div>
                <p>{generalInfo.name}</p>
                <p>{generalInfo.email!=="" &&  "Email: "+generalInfo.email}</p>
                <p>{generalInfo.phone}</p>
            </div>
        </div>
        

    )
}

function EducationInfo({sent}) {
    const [eduInfo, setEducationInfo] = useState({
        [crypto.randomUUID()]:{schoolName:'',
        title:'',initDate:'',endDate:''}
    })
    
    function handleChange(e,schoolId,field){
        let school = eduInfo[schoolId]
        school = {...school, [field]:e.target.value}
        setEducationInfo({...eduInfo, [schoolId]:school})
    }
    return (
        <div>
            <h2>Education Information</h2>
            {Object.keys(eduInfo).map(schoolId=>{
                return (<div key={schoolId}>
                    <input type="text" disabled={sent} onChange={(e)=>handleChange(e,schoolId,"schoolName")} placeholder="School" />
                    <input type="email" disabled={sent} onChange={(e)=>handleChange(e,schoolId,"title")} placeholder="Title of study" />
                    <input type="date" disabled={sent} onChange={(e)=>handleChange(e,schoolId,"initDate")} placeholder="Begin date" />
                    <input type="date" disabled={sent} onChange={(e)=>handleChange(e,schoolId,"endDate")} placeholder="End date" />  
                </div>)
            })
            }
            
            <div>
                {Object.keys(eduInfo).map(schoolId=>{
                    const dates = eduInfo[schoolId].initDate!=='' || eduInfo[schoolId].endDate!==''
                    return (<div key={schoolId}>
                        <p>{eduInfo[schoolId].schoolName}</p>
                        <p>{eduInfo[schoolId].title}</p>
                        <p>{dates && (eduInfo[schoolId].initDate+' - '+eduInfo[schoolId].endDate)}</p>
                    </div>)
                })}
            </div>
        </div>


    )
}

function EmploymentInfo({sent}) {
    const [jobsInfo, setJobInfo] = useState({
        [crypto.randomUUID()]:{companyName:'',
        position:'',description:'',initDate:'',endDate:''}
    })
    console.log(jobsInfo);
    
    function handleChange(e,jobId,field){
        let job = jobsInfo[jobId]
        job = {...job,[field]:e.target.value}
        setJobInfo({...jobsInfo, [jobId]:job})
    }

    return (
        <div>
            <h2>Employment Information</h2>
            {Object.keys(jobsInfo).map(jobId=>{
                
                return (<div key={jobId}>
                    <input type="text" disabled={sent} onChange={(e)=>handleChange(e,jobId,'companyName')} placeholder={jobsInfo[jobId].companyName}/>
                    <input type="text" disabled={sent} onChange={(e)=>handleChange(e,jobId,'position')} placeholder={jobsInfo[jobId].position}/>
                    <input type="text" disabled={sent} onChange={(e)=>handleChange(e,jobId,'description')} placeholder={jobsInfo[jobId].description}/>
                    <input type="date" disabled={sent} onChange={(e)=>handleChange(e,jobId,'initDate')} placeholder={jobsInfo[jobId].initDate}/>
                    <input type="date" disabled={sent} onChange={(e)=>handleChange(e,jobId,'endDate')} placeholder={jobsInfo[jobId].endDate}/>
                </div>)
            })}

            
            <ul>
            {Object.keys(jobsInfo).map(jobId=>{
                const dates = jobsInfo[jobId].initDate!=='' || jobsInfo[jobId].endDate!==''
                return (
                <li key={jobId}>
                    <h2>{jobsInfo[jobId].companyName}</h2>
                    <p>{jobsInfo[jobId].position}</p>
                    <p>{jobsInfo[jobId].description}</p>
                    <p>{dates && (jobsInfo[jobId].initDate+' - '+jobsInfo[jobId].endDate)}</p>
                    <p></p>
                </li>)
            })}
            </ul>
        </div>


    )
}

export {App}



