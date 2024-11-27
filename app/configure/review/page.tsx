
const page = () => {

  const imageSizes = [
    {
      name : 'w-full h-full object cover',
      viewname :'Image fill',
    },
    {
      name : 'w-50 h-50 justify-center item-center p-6',
      viewname :'Image fit',
      },
      {
        name : 'left-0 top-0 h-50 w-50',
        viewname:'top-left',
      }
  ]
  return (
    <div>
      This is your review page
    </div>
  )
}

export default page
