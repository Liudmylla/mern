import React, {useState,useEffect, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'

export const CreatePage = () => {
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link,setLink] = useState()

    useEffect( ()=>{
        window.M.updateTextFields()
    },[])

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
               const data = await request('/api/link/generate','POST',{from: link},{
                Authorization: `Bearer ${auth.token}`
               })
               console.log(data)
            } catch (e) {
                
            }
        }
    }
    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
            <label htmlFor="link">Enter your link</label>
                <div className='input-field'>
                <input
                    placeholder="Your link"
                    id="link"
                    type="text"
                    value={link}
                    onChange={e => setLink(e.target.value)}
                    onKeyPress={pressHandler}
                        />
               
                </div>
              
            </div>
        </div>
    )
}