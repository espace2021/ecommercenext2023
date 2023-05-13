export default function Head() {
  //<meta http-equiv="Content-Security-Policy" content="default-src *  data: blob: filesystem: about: ws: wss: 'unsafe-inline' 'unsafe-eval' 'unsafe-dynamic'; script-src * data: blob: 'unsafe-inline' 'unsafe-eval'; connect-src * data: blob: 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src * data: blob: ; style-src * data: blob: 'unsafe-inline'; font-src * data: blob: 'unsafe-inline';"/>
  return (
    <>
     <title>l'Escale Beauté | Chaises à Besançon</title>
        <meta
          name="description"
          content="l'Escale Beauté & Extérieur"
        />
        {/* <link rel="canonical" href={canonicalUrl} /> */}

      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        precedence="default"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        precedence="default"
      />
 
    </>
  )
}
