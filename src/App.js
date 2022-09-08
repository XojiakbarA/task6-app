import {Container, CssBaseline, Toolbar} from "@mui/material";
import MyTable from "./components/Table";
import MyAppBar from "./components/AppBar";
import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {

    const API_BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

    const [locales, setLocales] = useState([])
    const [locale, setLocale] = useState("")
    const [error, setError] = useState(0)
    const [seed, setSeed] = useState(0)
    const [count, setCount] = useState(20)
    const [rows, setRows] = useState([])

    const handleNext = () => {
        setCount(10)
        setSeed(prev => Number(prev) + 1)
    }
    const handleLocaleChange = (e) => {
        setRows([])
        setCount(20)
        setLocale(e.target.value)
    }
    const handleErrorChange = (e) => {
        setRows([])
        setCount(20)
        const value = Number(e.target.value)
        if (value > 1000) return
        setError(e.target.value)
    }
    const handleSeedChange = (e) => {
        setRows([])
        setCount(20)
        setSeed(e.target.value)
    }
    const handleRandomClick = () => {
        setRows([])
        setCount(20)
        setSeed(Math.ceil(Math.random() * 1000))
    }

    useEffect(() => {
        const getLocales = async () => {
            const res = await axios.get(`${API_BASE_URL}/locales`)
            if (res.status === 200) {
                setLocales(res.data)
                setLocale(res.data[0])
            }
        }
        getLocales()
    }, [])
    useEffect(() => {
        const getUsers = async () => {
            const res = await axios.get(`${API_BASE_URL}/users`, { params: { seed, count, locale, error } })
            if (res.status === 200) {
                setRows(prev => [...prev, ...res.data])
            }
        }
        if (locales.length) {
            getUsers()
        }
    }, [seed, count, locale, error, locales.length])

    console.log(rows[0])

    return (
        <Container maxWidth={"lg"}>
            <CssBaseline/>
            <MyAppBar
                rows={rows}
                locales={locales}
                localeValue={locale}
                errorValue={error}
                seedValue={seed}
                onLocaleChange={handleLocaleChange}
                onErrorChange={handleErrorChange}
                onSeedChange={handleSeedChange}
                onRandomClick={handleRandomClick}
            />
            <Toolbar sx={{ pb: 10 }}/>
            <MyTable
                rows={rows}
                handleNext={handleNext}
            />
            <Toolbar/>
        </Container>
    )
}

export default App