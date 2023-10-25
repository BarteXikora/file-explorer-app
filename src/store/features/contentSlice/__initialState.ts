import { initialStateType } from './contentSlice.types'

import previewImage from '../../../assets/__files/photo0.png'

// currentPath: ['Prywatne', 'Obrazy', 'Wycieczka na rowery - sierpień 2023'],

const initialState: initialStateType = {
    projectName: 'Moje pliki',
    currentPath: [],
    currentFolder: {},
    content: {
        folders: [
            {
                id: 0,
                name: 'Prywatne',
                star: true,
                content: {
                    folders: [
                        {
                            id: 3,
                            name: 'Obrazy',
                            content: {
                                folders: [
                                    {
                                        id: 5,
                                        name: 'Wycieczka na rowery - sierpień 2023',
                                        content: {
                                            folders: [
                                                {
                                                    id: 6,
                                                    name: 'Nieobrobione',
                                                    star: true,
                                                    content: {}
                                                }, {
                                                    id: 7,
                                                    name: 'Pozostałe - większość do śmieci',
                                                    content: {}
                                                }
                                            ],
                                            files: [
                                                {
                                                    id: 100,
                                                    name: 'Wycieczka na rowery 1',
                                                    extension: 'PNG',
                                                    preview: previewImage
                                                }
                                            ]
                                        }
                                    }
                                ],
                                files: []
                            }
                        }, {
                            id: 4,
                            name: 'Dokumenty',
                            content: {}
                        }
                    ],
                    files: []
                }
            }, {
                id: 1,
                name: 'Pozostałe',
                content: {}
            }
        ],
        files: []
    }
}

export default initialState