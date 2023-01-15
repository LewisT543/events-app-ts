import {GetStaticProps, NextPage} from "next";
import {DashHome} from "../../src/components/dashboard/DashHome";

export const DashboardHome: NextPage = ({data}: any) => {

  return (
    <DashHome data={data}/>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  // get data from server on page load
  return {
    props: {
      data: 'nothing special'
    }
  }
}

export default DashboardHome
