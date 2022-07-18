interface IHeroCTA {
  title: string
  content?: string
  buttonText: string
  image?: {
    src: string
    srcSet?: string[]
    alt: string
  }
}

interface IHeroImgAttrs {
  imgAttrs: IHeroCTA['image']
}

interface INavigation {
  active: boolean
  menuToggle: React.Dispatch<React.SetStateAction<boolean>>
}
