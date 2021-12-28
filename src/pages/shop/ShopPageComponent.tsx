import React from 'react'
import CollectionPreviewComponent from '../../components/collection-preview/CollectionPreviewComponent'
import styles from './ShopPageComponent.module.css'

// interface ItemType {
//   id: number
//   name: string
//   imageUrl: string
//   price: number
// }

// interface CollectionType {
//   // id: 'guitars' | 'basses' | 'amps' | 'pedals' | 'speakers'
//   id: number
//   title: string
//   routeName: string
//   items: ItemType[]
// }

const SHOP_DATA = {
  guitars: {
    id: 1,
    title: 'Guitars',
    routeName: 'guitars',
    items: [
      {
        id: 1,
        name: 'Epiphone',
        imageUrl:
          'https://images.unsplash.com/photo-1607560105214-0aaa5f8fcba4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDF8fGVsZWN0cmljJTIwZ3VpdGFyfGVufDB8fHx8MTYyMzIxOTAyOA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
        price: 2500,
      },
      {
        id: 2,
        name: 'Gibson',
        imageUrl:
          'https://images.unsplash.com/photo-1583917277483-0593c4071d72?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDQwfHxlbGVjdHJpYyUyMGd1aXRhcnxlbnwwfHx8fDE2MjMyMjA5OTc\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
        price: 1200,
      },
      {
        id: 3,
        name: 'Ibanez',
        imageUrl:
          'https://images.unsplash.com/photo-1616066959475-3ece465f7025?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDEyfHxlbGVjdHJpYyUyMGd1aXRhcnxlbnwwfHx8fDE2MjMyMTkyNTM\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
        price: 900,
      },
      {
        id: 4,
        name: 'PRS',
        imageUrl:
          'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?crop=entropy%5Cu0026cs=tinysrgb%5Cu0026fit=max%5Cu0026fm=jpg%5Cu0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDE0fHxlbGVjdHJpYyUyMGd1aXRhcnxlbnwwfHx8fDE2MjMyMTkyNTM%5Cu0026ixlib=rb-1.2.1%5Cu0026q=80%5Cu0026w=1080',
        price: 1400,
      },
      {
        id: 5,
        name: 'Gretsch',
        imageUrl:
          'https://images.unsplash.com/photo-1577539940666-cf50cb78148b?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDE1fHxlbGVjdHJpYyUyMGd1aXRhcnxlbnwwfHx8fDE2MjMyMTkyNTM\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
        price: 2100,
      },
      {
        id: 6,
        name: 'Fender',
        imageUrl:
          'https://images.unsplash.com/photo-1601956349641-ec9de1c434b9?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDE5fHxlbGVjdHJpYyUyMGd1aXRhcnxlbnwwfHx8fDE2MjMyMTkyNTM\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
        price: 800,
      },
      {
        id: 7,
        name: 'Fender',
        imageUrl:
          'https://images.unsplash.com/flagged/photo-1552331619-7f97d9a4c9c6?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDM4fHxlbGVjdHJpYyUyMGd1aXRhcnxlbnwwfHx8fDE2MjMyMjA5OTc\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
        price: 800,
      },
      {
        id: 8,
        name: 'Gibson',
        imageUrl:
          'https://images.unsplash.com/photo-1586391159312-e26d25fa4c42?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDM5fHxlbGVjdHJpYyUyMGd1aXRhcnxlbnwwfHx8fDE2MjMyMjA5OTc\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
        price: 800,
      },
      {
        id: 9,
        name: 'Charvel',
        imageUrl:
          'https://images.unsplash.com/photo-1598912367591-3d88a05bc012?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDE2fHxlbGVjdHJpYyUyMGd1aXRhcnxlbnwwfHx8fDE2MjMyMTkyNTM\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
        price: 900,
      },
    ],
  },
  basses: {
    id: 2,
    title: 'Basses',
    routeName: 'basses',
    items: [
      {
        id: 10,
        name: 'Ibanez',
        imageUrl:
          'https://images.unsplash.com/photo-1602900332980-6e6f13946a3c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDF8fGJhc3MlMjBndWl0YXJ8ZW58MHx8fHwxNjIzMzAyMzAx\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
        price: 1200,
      },
      {
        id: 11,
        name: 'Epiphone',
        imageUrl:
          'https://images.unsplash.com/photo-1569692880247-0b15adbf7504?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDJ8fGJhc3MlMjBndWl0YXJ8ZW58MHx8fHwxNjIzMzAyMzAx\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
        price: 900,
      },
      {
        id: 12,
        name: 'Schecter',
        imageUrl:
          'https://images.unsplash.com/photo-1617161034978-3aa9d79a9f57?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDN8fGJhc3MlMjBndWl0YXJ8ZW58MHx8fHwxNjIzMzAyMzAx\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
        price: 700,
      },
      {
        id: 13,
        name: 'Fender',
        imageUrl:
          'https://images.unsplash.com/photo-1598519503897-a233742ea896?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDh8fGJhc3MlMjBndWl0YXJ8ZW58MHx8fHwxNjIzMzAyMzAx\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
        price: 2900,
      },
    ],
  },
  amps: {
    id: 3,
    title: 'Amps',
    routeName: 'amps',
    items: [
      {
        id: 22,
        name: 'Bugera V55',
        imageUrl:
          'https://images.unsplash.com/photo-1463134443644-45f4dc57a612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDIxfHxhbXB8ZW58MHx8fHwxNjI5NzAwNTg4&ixlib=rb-1.2.1&q=80&w=1080',
        price: 350,
      },
      {
        id: 23,
        name: 'Pioneer Elite',
        imageUrl:
          'https://images.unsplash.com/photo-1511924473169-58650b22e48f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDF8fHBpb25lZXIlMjBhbXB8ZW58MHx8fHwxNjI5NzAwODc5&ixlib=rb-1.2.1&q=80&w=1080',
        price: 900,
      },
    ],
  },
  pedals: {
    id: 4,
    title: 'Pedals',
    routeName: 'pedals',
    items: [
      {
        id: 29,
        name: 'Boss PS5',
        imageUrl:
          'https://images.unsplash.com/photo-1613065053787-93fef9374112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDh8fGd1aXRhciUyMHBlZGFsc3xlbnwwfHx8fDE2Mjk2OTk2MTY&ixlib=rb-1.2.1&q=80&w=1080',
        price: 200,
      },
    ],
  },
  speakers: {
    id: 5,
    title: 'Speakers',
    routeName: 'speakers',
    items: [
      {
        id: 35,
        name: 'Fender Champion 200',
        imageUrl:
          'https://images.unsplash.com/photo-1532455140376-0b97d1a2ee15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDR8fGZlbmRlciUyMHNwZWFrZXJzfGVufDB8fHx8MTYyOTcwMDAyOQ&ixlib=rb-1.2.1&q=80&w=1080',
        price: 400,
      },
      {
        id: 36,
        name: 'Marshall Stanmore',
        imageUrl:
          'https://images.unsplash.com/photo-1510104183447-b598400bb62c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDh8fG1hcnNoYWxsJTIwc3BlYWtlcnN8ZW58MHx8fHwxNjI5NzAwMTg1&ixlib=rb-1.2.1&q=80&w=1080',
        price: 600,
      },
    ],
  },
}

export default function ShopPageComponent() {
  // console.log(`+++> ShopPageComponent SHOP_DATA:`, SHOP_DATA)
  // console.log(`+++> ShopPageComponent SHOP_DATA keys:`, Object.keys(SHOP_DATA))

  return (
    <div className={styles.shop}>
      {Object.keys(SHOP_DATA).map((key) => {
        return (
          <CollectionPreviewComponent
            key={key}
            title={key}
            items={SHOP_DATA[key as keyof typeof SHOP_DATA].items}
          />
        )
      })}
    </div>
  )
}
