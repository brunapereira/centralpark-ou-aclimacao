import aclimacao1 from '../../static/options/aclimacao-1.jpg'
import aclimacao2 from '../../static/options/aclimacao-2.jpg'
import aclimacao3 from '../../static/options/aclimacao-3.jpg'
import aclimacao4 from '../../static/options/aclimacao-4.jpg'
import aclimacao5 from '../../static/options/aclimacao-5.jpg'
import centralPark1 from '../../static/options/central-park-1.jpg'
import centralPark2 from '../../static/options/central-park-2.jpg'
import centralPark3 from '../../static/options/central-park-3.jpg'
import centralPark4 from '../../static/options/central-park-4.jpg'
import centralPark5 from '../../static/options/central-park-5.jpg'

const images = {0: aclimacao1, 1: aclimacao2, 2: aclimacao3, 3: aclimacao4, 4: aclimacao5, 5: centralPark1, 6: centralPark2, 
                7: centralPark3, 8: centralPark4, 9: centralPark5}
const newArray = (amount) => [...Array(amount).keys()] 
const shuffle = (a) => {
    let j, x, i
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        x = a[i]
        a[i] = a[j]
        a[j] = x
    }
    return a
}

export const options = shuffle(newArray(10)).map((e => ({path: images[e], type: (e >= 5 ? 'central-park' : 'aclimacao')})))
