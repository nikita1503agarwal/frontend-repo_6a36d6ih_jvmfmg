import { useEffect } from 'react'

function upsertMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let tag = document.querySelector(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

export default function SEO({ title, description, canonical, jsonLd }) {
  useEffect(() => {
    if (title) document.title = title
    if (description) upsertMeta('description', description)
    upsertMeta('viewport', 'width=device-width, initial-scale=1')
    upsertMeta('theme-color', '#000000')
    if (canonical) upsertLink('canonical', canonical)

    const id = 'structured-data-jsonld'
    let script = document.getElementById(id)
    if (!script) {
      script = document.createElement('script')
      script.id = id
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = jsonLd ? JSON.stringify(jsonLd) : ''
  }, [title, description, canonical, jsonLd])

  return null
}
