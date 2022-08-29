import { useEffect, useState } from 'react'
import axiosClient from '../api/axiosClient';


const useFecth = (url) => {

    const [data, setData] = useState()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState()

	useEffect(() => {
		let here = true;

		setLoading(true)

		axiosClient.get(url)
		.then(res => {
			if(!here) return;
			setData(res)
		})
		.catch(err => {
			if(!here) return;
			setError(err)
		})
		.finally(() => {
			if(!here) return;
			setLoading(false)
		})
		return () => {
			here = false
		}
	}, [url])

  return { data, loading, error }
}


export default useFecth