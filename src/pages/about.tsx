import Main from "src/layout/Main";

const About = () => {
  return (
    <Main title="About">
      <div className="prose text-white my-6 prose-a:text-slate-300 prose-a:underline-offset-8">
        <p>
          Building capacity for collective action through Deliberate Practice. Currently working as a Fullstack Developer at <a href="https://airbills.xyz/" target="_blank">Formula Airbills</a>.
        </p>
        <p>
          Previously, I have worked as a Full Stack Software Engineer at <a href="https://buypower.ng" target="_blank">Buypower</a> (Sep 2021 - March 2022), Fullstack Engineer at <a href="https://motionwares.com" target="_blank">Motionwares</a> (Dec 2019 - July 2021) and Software Developer Interrn at <a href="https://formula.airbills.xyz" target="_blank">Purposeful</a> (July 2019 - Sept 2019).
        </p>
      </div>
    </Main>
  )
}

export default About;
