import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export const SpotifyContext = createContext(null)

export default function Provider ({ children }) {
    const [tokens, setTokens] = useState([])
    const [player, setPlayer] =useState()
    const [device, setDevice] = useState()
    const [loggedIn, setLoggedIn] = useState(false)
    const [connected, setConnected] = useState(false)

    const [trackInfo, setTrackInfo] = useState()
    const [trackFeatures, setTrackFeatures] = useState()
    const [trackAnalysis, setTrackAnalysis] = useState()

    return (
        <SpotifyContext.Provider value={{
            tokens,
            player,
            device,
            loggedIn,
            connected,
            trackInfo,
            trackFeatures,
            trackAnalysis
        }}>
            {children}
        </SpotifyContext.Provider>
    )
}