import React from "react";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <div className="border p-4 shadow hover:shadow-xl bg-slate-100 rounded">
        <h5 className="text-xl font-semibold mb-2">
          What are the different ways to manage a state in a React application?
        </h5>
        <span className="text-lg">
          Are you facing difficulties in making loading spinners or a pop-up
          appears at the right time? It can be because of an unmanaged state in
          React. A state is a JavaScript object. It stores a component's dynamic
          data and determines the component's behavior. There are four main
          types of state you need to properly manage in your React apps:
          <li>Local State</li>
          <li>Global state</li>
          <li>Server state</li>
          <li>URL state</li>
          <p className="mt-2">
            Local (UI) state – Local state is data we manage in one or another
            component.
          </p>
          <p className="mt-2">
            Global (UI) state – Global state is data we manage across multiple
            components.
          </p>
          <p className="mt-2">
            Server state – Data that comes from an external server that must be
            integrated with our UI state.
          </p>
          <p className="mt-2">
            URL state – Data that exists on our URLs, including the pathname and
            query parameters.
          </p>
        </span>
      </div>
      <div className="border p-4 shadow hover:shadow-xl bg-slate-100 rounded my-6">
        <h5 className="text-xl font-semibold mb-2">
          How does prototypical inheritance work?
        </h5>
        <p className="text-lg">
          Prototypical inheritance refers to the ability to access object
          properties from another object. We use a JavaScript prototype to add
          new properties and methods to an existing object constructor. We can
          then essentially tell our JS code to inherit properties from a
          prototype. Prototypical inheritance allows us to reuse the properties
          or methods from one JavaScript object to another through a reference
          pointer function.
          <br />
          <br />
          In JavaScript, an object can inherit properties of another object. The
          object from where the properties are inherited is called the
          prototype. In short, objects can inherit properties from other objects
          — the prototypes.
        </p>
      </div>
      <div className="border p-4 shadow hover:shadow-xl bg-slate-100 rounded my-6">
        <h5 className="text-xl font-semibold mb-2">
          What is a unit test? Why should we write unit tests?
        </h5>
        <p className="text-lg">
          Unit testing is a type of software testing where individual units or
          software components are tested. Its purpose is to validate that each
          unit of code performs as expected. A unit can be anything you want it
          to be — a line of code, a method, or a class.
        </p>
        <p className="mt-3 text-lg">
          <li>
            Unit tests save time and money. Usually, we tend to test the happy
            path more than the unhappy path. If you release such an app without
            thorough testing, you would have to keep fixing issues raised by
            your potential users.
          </li>
          <li>
            Well-written unit tests act as documentation for your code. Any
            developer can quickly look at your tests and know the purpose of
            your functions.
          </li>
          <li>It simplifies the debugging process.</li>
          <li>
            Unit testing improves code coverage. A debatable topic is to have
            100% code coverage across your application.
          </li>
        </p>
      </div>
      <div className="border p-4 shadow hover:shadow-xl bg-slate-100 rounded my-6">
        <h5 className="text-xl font-semibold mb-2">
          React vs. Angular vs. Vue?
        </h5>
        <div>
          <h2 className="text-xl font-semibold underline mb-2">React</h2>
          <p className="text-lg">
            React is one of the most popular JavaScript projects with 160k stars
            on GitHub. It’s developed and maintained by Facebook, and it’s used
            internally in many of their projects. Additionally, it powers over 2
            million websites, according to BuiltWith‘s usage statistics.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold underline mb-2">Vue</h2>
          <p className="text-lg">
            Out of the three frameworks, Vue has the most stars on GitHub, with
            176k stars. The project is developed and led by ex-Googler Evan You.
            It’s a very strong, independent project in the open-source community
            and is used by over 1 million websites, according to BuiltWith.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold underline mb-2">Angular</h2>
          <p className="text-lg">
            Angular is developed by Google, but surprisingly it’s not used in
            some of their flagship products such as Search or Youtube. It’s
            often used in enterprise projects, and it powers over 97,000
            websites based on BuiltWith‘s data.
            <br />
            <br />
            It’s the least starred among the three frameworks, with 68k stars on
            GitHub. However, when switching from Angular 1 to Angular 2, they
            created an entirely new repository instead of continuing the
            AngularJS project, which also has 59k stars.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
