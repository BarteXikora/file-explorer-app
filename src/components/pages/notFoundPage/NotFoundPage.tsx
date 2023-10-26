import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import StyledNotFoundPage from './NotFoundPage.styles'
import Button from '../../ui/button/Button'

import imgNotFound from '../../../assets/img/img-404.png'
import iconBack from '../../../assets/icons/icon-arrow-left.png'

const NotFoundPage = () => {
    const [timeLeft, setTimeLeft] = useState(10)
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => setTimeLeft(timeLeft - 1), 1000)

        if (timeLeft === 0) navigate('/my-files')

    }, [timeLeft, navigate])

    return <StyledNotFoundPage>
        <div className="content">
            <img src={imgNotFound} alt="404" />

            <h1>Nie znaleziono strony!</h1>

            <p>Przechodzęna stronę główną za: <b>{timeLeft !== 0 ? timeLeft : '1'} sekund.</b></p>

            <Button onClick={() => navigate('/my-files')}>
                <img src={iconBack} alt="Powrót" />

                Wróć na stronę główną
            </Button>
        </div>
    </StyledNotFoundPage>
}

export default NotFoundPage