import { storageService } from './storage.services.js'
import { utilService } from './util.services.js'
import axios from 'axios'

const KEY = 'story_db'
const API = '//localhost:3030/api/story/'
_createStorys()

export const storyService = {
    query,
    getById,
    remove,
    save,
    // getEmptystory,
}

function query(filterBy = null) {
    console.log('front-service-query');
    //back
    // return axios.get(API, { params: filterBy }).then((res) => res.data)
    //front
    return storageService.query(KEY)
}

function getById(storyId) {
    console.log('storyID front', storyId);
    // return axios.get(API + storyId).then((res) => res.data)
    return storageService.get(KEY, storyId)
}

function remove(storyId) {
    // return axios.delete(API + storyId).then((res) => res.data)
    return storageService.remove(KEY, storyId)
}

function save(story) {
    // if (story._id) {
    //     return axios.put(API + story._id, story).then((res) => res.data);
    // } else {
    //     return axios.post(API + story._id, story).then((res) => res.data);
    // }
    if (story.id) return storageService.put(KEY, story)
    return storageService.post(KEY, story)
}

// function getEmptystory() {
//     return {
//         name: ,
//         price: utilService.getRandomIntInclusive(0, 300),
//         labels: [Battery powered, Outdoor],
//         createdAt: Date.now(),
//         inStock: true,
//     };
// }

function _createStorys() {
    let storys = utilService.loadFromStorage(KEY)
    if (!storys || !storys.length) {
        storys = [
            {
                _id: 's101',
                txt: 'hello instegram',
                imgUrl: 'https://www.cheatsheet.com/wp-content/uploads/2020/09/Joey-Tribbiani.jpg',
                createdAt: 123543452,
                by: {
                    _id: 'u101',
                    username: 'joey_tribbiani',
                    profileImgUrl: 'https://i.pinimg.com/originals/32/cb/60/32cb600629bfdad9cbe5f138a67dc7d3.jpg'
                },
                loc: {
                    lat: 11.11,
                    lng: 22.22,
                    name: 'Tel Aviv'
                },
                comments: [
                    {
                        id: 'c1001',
                        by: {
                            _id: 'u105',
                            username: 'Bob',
                            profileImgUrl: 'http://some-img'
                        },
                        txt: 'good one!',
                        likedBy: [
                            {
                                _id: 'u105',
                                username: 'Bob',
                                profileImgUrl: 'http://some-img'
                            }
                        ]
                    },
                    {
                        id: 'c1002',
                        by: {
                            _id: 'u106',
                            username: 'Dob',
                            profileImgUrl: 'http://some-img'
                        },
                        txt: 'not good!',
                        likedBy: []
                    }
                ],
                likedBy: [
                    {
                        _id: 'u105',
                        username: 'Bob',
                        profileImgUrl: 'http://some-img'
                    },
                    {
                        _id: 'u106',
                        username: 'Dob',
                        profileImgUrl: 'http://some-img'
                    }
                ],
                tags: [
                    'fun',
                    'kids'
                ]
            },
            {
                _id: 's102',
                txt: 'Best trip ever',
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_SdO4jbyc9G9O8HCefKwxHlYBk2_voaxBuw&usqp=CAU',
                createdAt: 123543452,
                by: {
                    _id: 'u102',
                    username: 'chandler_bing',
                    profileImgUrl: 'https://upload.wikimedia.org/wikipedia/en/6/66/Matthew_Perry_as_Chandler_Bing.png'
                },
                loc: {
                    lat: 11.11,
                    lng: 22.22,
                    name: 'Tel Aviv'
                },
                comments: [
                    {
                        id: 'c1001',
                        by: {
                            _id: 'u105',
                            username: 'Bob',
                            profileImgUrl: 'http://some-img'
                        },
                        txt: 'good one!',
                        likedBy: [
                            {
                                _id: 'u105',
                                username: 'Bob',
                                profileImgUrl: 'http://some-img'
                            }
                        ]
                    },
                    {
                        id: 'c1002',
                        by: {
                            _id: 'u106',
                            username: 'Dob',
                            profileImgUrl: 'http://some-img'
                        },
                        txt: 'not good!',
                        likedBy: []
                    }
                ],
                likedBy: [
                    {
                        _id: 'u105',
                        username: 'Bob',
                        profileImgUrl: 'http://some-img'
                    },
                    {
                        _id: 'u106',
                        username: 'Dob',
                        profileImgUrl: 'http://some-img'
                    }
                ],
                tags: [
                    'fun',
                    'kids'
                ]
            },
            {
                _id: 's103',
                txt: 'yabalulu',
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-kTX4HG1Pe85xrrbzlztr1it5Ag9wLEK1A&usqp=CAU',
                createdAt: 123543452,
                by: {
                    _id: 'u103',
                    username: 'monica_geller',
                    profileImgUrl: 'http://some-img'
                },
                loc: {
                    lat: 11.11,
                    lng: 22.22,
                    name: 'Tel Aviv'
                },
                comments: [
                    {
                        id: 'c1001',
                        by: {
                            _id: 'u105',
                            username: 'Bob',
                            profileImgUrl: 'http://some-img'
                        },
                        txt: 'good one!',
                        likedBy: [
                            {
                                _id: 'u105',
                                username: 'Bob',
                                profileImgUrl: 'http://some-img'
                            }
                        ]
                    },
                    {
                        id: 'c1002',
                        by: {
                            _id: 'u106',
                            username: 'Dob',
                            profileImgUrl: 'http://some-img'
                        },
                        txt: 'not good!',
                        likedBy: []
                    }
                ],
                likedBy: [
                    {
                        _id: 'u105',
                        username: 'Bob',
                        profileImgUrl: 'http://some-img'
                    },
                    {
                        _id: 'u106',
                        username: 'Dob',
                        profileImgUrl: 'http://some-img'
                    }
                ],
                tags: [
                    'fun',
                    'kids'
                ]
            },
            {
                _id: 's104',
                txt: 'yakabubu',
                imgUrl: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/43/1540374820-ross-friends.jpg?crop=0.697xw:1.00xh;0.0917xw,0&resize=480:*',
                createdAt: 123543452,
                by: {
                    _id: 'u104',
                    username: 'ross_geller',
                    profileImgUrl: 'https://www.thelist.com/img/gallery/things-friends-fans-never-noticed-about-ross-geller/l-intro-1621874931.jpg',
                    loc: {
                        lat: 11.11,
                        lng: 22.22,
                        name: 'Tel Aviv'
                    },
                    comments: [
                        {
                            id: 'c1001',
                            by: {
                                _id: 'u105',
                                username: 'Bob',
                                profileImgUrl: 'http://some-img'
                            },
                            txt: 'good one!',
                            likedBy: [
                                {
                                    _id: 'u105',
                                    username: 'Bob',
                                    profileImgUrl: 'http://some-img'
                                }
                            ]
                        },
                        {
                            id: 'c1002',
                            by: {
                                _id: 'u106',
                                username: 'Dob',
                                profileImgUrl: 'http://some-img'
                            },
                            txt: 'not good!',
                            likedBy: []
                        }
                    ],
                    likedBy: [
                        {
                            _id: 'u105',
                            username: 'Bob',
                            profileImgUrl: 'http://some-img'
                        },
                        {
                            _id: 'u106',
                            username: 'Dob',
                            profileImgUrl: 'http://some-img'
                        }
                    ],
                    tags: [
                        'fun',
                        'kids'
                    ]
                }
            }
        ]
        utilService.saveToStorage(KEY, storys)
    }
    return storys
}
