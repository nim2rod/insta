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
                imgUrl: 'http://some-img',
                createdAt: 123543452,
                by: {
                    _id: 'u101',
                    username: 'joey_tribbiani',
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
                _id: 's102',
                txt: 'Best trip ever',
                imgUrl: 'http://some-img',
                createdAt: 123543452,
                by: {
                    _id: 'u102',
                    username: 'chandler_bing',
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
                _id: 's103',
                txt: 'yabalulu',
                imgUrl: 'http://some-img',
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
                imgUrl: 'http://some-img',
                createdAt: 123543452,
                by: {
                    _id: 'u104',
                    username: 'ross_geller',
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
            }
        ]
        utilService.saveToStorage(KEY, storys)
    }
    return storys
}
