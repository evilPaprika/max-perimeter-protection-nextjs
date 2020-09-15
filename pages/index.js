import matter from 'gray-matter'
import Layout from '../components/Layout'
import BlogList from '../components/BlogList'
import siteMetadata from '../content/site-metadata.md'

const Index = props => {
  return (
    <Layout
      pathname="/"
      siteTitle={props.siteTitle}
      siteDescription={props.description}
    >
      <section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et urna turpis. Donec et pretium urna. Donec venenatis augue vel purus convallis elementum. Quisque luctus euismod quam volutpat tempor. Mauris consectetur iaculis ornare. Praesent placerat tincidunt tellus, sit amet vulputate lorem ornare in. Suspendisse et orci imperdiet, varius mauris eget, sagittis leo. Duis sit amet facilisis elit. Vestibulum aliquet tincidunt dignissim. Aenean convallis lobortis condimentum.

        Quisque sit amet lorem ultricies, tincidunt ipsum et, pellentesque lectus. Suspendisse volutpat ut mi at vulputate. In turpis neque, mattis et tincidunt id, vehicula porta nunc. Duis sit amet posuere lectus. Aenean rhoncus ullamcorper risus quis sollicitudin. Cras sed sem est. Vivamus in cursus odio. Cras sit amet fringilla tellus.

        Quisque pellentesque ut erat ut suscipit. Maecenas aliquam, nisi sed condimentum dictum, arcu turpis dictum velit, quis malesuada purus nisl et neque. Proin ac arcu ac elit sollicitudin tincidunt et quis urna. Quisque finibus augue convallis hendrerit sodales. Quisque dapibus tellus at nibh lacinia tempus. Ut euismod, felis viverra rutrum rhoncus, tellus erat auctor eros, ac maximus mauris ante sit amet nulla. Sed rhoncus mollis fringilla. Etiam eu lorem eget leo imperdiet faucibus a hendrerit felis.

        Aliquam erat volutpat. Nunc efficitur elementum bibendum. Vivamus lectus ligula, interdum id rutrum et, imperdiet sit amet lectus. Vestibulum laoreet, tortor a vestibulum venenatis, neque tortor egestas turpis, quis tristique nisi erat in ipsum. Donec vel enim non ipsum porta ultrices in commodo risus. Suspendisse in laoreet elit, a lobortis ipsum. Morbi gravida ornare dictum. Mauris eu ligula eu leo feugiat auctor. Phasellus posuere elementum ex, non imperdiet magna efficitur vel. Donec tempor risus sit amet tortor rhoncus aliquet. Nullam metus ante, egestas vitae neque quis, tempus finibus ipsum. Integer vel dictum est, ac porta dui. Ut cursus laoreet sapien, vitae lobortis est.
      </section>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const siteConfig = matter(siteMetadata).data;

  const templatedPages = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      allTemplatedPages: templatedPages,
      siteTitle: siteConfig.title,
      description: siteConfig.description,
    },
  }
}
