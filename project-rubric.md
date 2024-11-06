# DSCI 554 Sample Project Rubric

The project rubric is subject to change.

## Description

Projects include the following deliverables:

- Demonstration - 30%
- Presentation - 10%
- Paper - 50%
- Video - 10%

## Rubric

### Development

The project should be deployed and have a public accessible link for demonstration. Please see following examples for deploying Streamlit, Vue and React Apps.

    - [Streamlit](https://dsci-554.streamlit.app/) : [GitHub](https://github.com/dsci-554/streamlit-example)
    - [Vue](https://dsci-554.github.io/vue-example) : [Github](https://github.com/dsci-554/vue-example)
    - [React](https://dsci-554.github.io/react-example) : [Github](https://github.com/dsci-554/react-example)


Include in `README.md` the following section right after the title:

```md
## PROJECT SUMMARY

### PROJECT INFORMATION

- Project title: <title>
- Group name: <group-name>
- Team names: [<member-name> (<member-USC-username>) ...]

### PROJECT ARTIFACTS

- [Demonstration URL](<demo-url>)
- [Presentation PDF](<presentation-pdf-url>) and [transcript](<presentation-transcript-md-url>)
- [Article](<article-pdf-url>) and [Overleaf URL](<overleaf-article-url>)
- [YouTube video](<youtube-video-url>)

### PROJECT CONTRIBUTIONS

- Demonstration: [<member-name> (<member-USC-username>) ...]
- Presentation: [<member-name> (<member-USC-username>) ...]
- Transcript: [<member-name> (<member-USC-username>) ...]
- Paper: [<member-name> (<member-USC-username>) ...]
- YouTube video: [<member-name> (<member-USC-username>) ...]

- Web site: [<member-name> (<member-USC-username>) ...]
- <chart-description>: [<member-name> (<member-USC-username>) ...]
- <chart-description>: [<member-name> (<member-USC-username>) ...]
- <chart-description>: [<member-name> (<member-USC-username>) ...]
- ...
```

| Level         | Description                                                                                                                                                                                                                                                                                                 |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sophisticated | GIT is used well by all members of the team. Node.js, d3.js, Bootstrap and one of React, Streamlit, or Vue.js are well used. Project information set-up, deployment and code base (including presentation) is well documented in README. Project summary is well included in `README.md`. (4-5 pts).      |
| Competent     | GIT is not well used by all members of the team. Node.js, d3.js, Bootstrap and one of React, Streamlit, or Vue.js are not well used. Project information set-up, deployment and code base (including presentation) is not well documented in README. Project summary is not well included in `README.md`. |
| Needs work    | GIT is not used by all members of the team. Node.js, d3.js, Bootstrap and one of React, Streamlit, or Vue.js are not used. Project information set-up, deployment and code base (including presentation) are not documented in README. Project summary is not included in `README.md`. (0-1 pts).         |

### Demonstration

| Level         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sophisticated | Website works well. Layout is well thought, pages are well designed with a good story flow, forms are well adapted to the information, information displays are well formed and support well visual queries, color schemes are well chosen, axes are well formed. One or more d3 maps, responsive d3 charts, interactive d3 charts, d3 animated transitions and d3 layouts are included and work well. (4-5 pts).                                                      |
| Competent     | Website does not work well. Layout is not well thought, pages are not well designed with a good story flow, forms are not well adapted to the information, information displays are not well formed and do not support well visual queries, color schemes are not well chosen, axes are not well formed. One or more d3 maps, responsive d3 charts, interactive d3 charts, d3 animated transitions and d3 layouts are not included and or do not work well. (2-3 pts). |
| Needs work    | Website does not work. Layout is not thought, pages are not designed with a good story flow, forms are not adapted to the information, information displays are not formed and do not support visual queries, color schemes are not chosen, axes are not formed. One or more d3 maps, responsive d3 charts, interactive d3 charts, d3 animated transitions and d3 layouts are not included and or work. (0-1 pts).                                                     |

### Presentation

Presentation__ students will present their projects to the class using the [PechaKucha](http://www.pechakucha.org) presentation format. PechaKucha is a simple presentation format where you show *10 images, each for 20 seconds*. The images advance automatically and you talk along to the images. You cannot use bullets in any of your slides. The presentation will be created with [Sozi](http://sozi.baierouge.fr). Presentations should include the following:

- Cover slide (used to start the presentation manually, not included in time) including title, group name, names and emails
- Introduction leading with 10 words on what your visualization is about. Explain who is it addressed to, why it is interesting, original, useful.
- Explain who did what.
- Explain the data and topic as needed to understand the project.
- Explain the research you have done, what others have done in the same topic, other topics that are relevant.
- Explain how your work is original.
- Explain your design process, rationale for the layout, story, choice of forms, how you optimized the visual queries and user interaction.
- Highlight what you have built and with d3 (see Demonstration for a list of required d3 features to include) and other tools including Bootstrap and framework features you used.
- Explain what you would have done differently.

Use Markdown to create a transcript of your presentation in a file named `PRESENTATION_TRANSCRIPT.md`. Make sure to provide a link in the `README.md` as described in Development.

| Level         | Description                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| Sophisticated | Project is well presented by all members of the team, addresses all the requirements well. (4-5 pts).              |
| Competent     | Project is not well presented by all members of the team, does not addresses all the requirements well. (2-3 pts). |
| Needs work    | Project is not presented by all members of the team, does not addresses all the requirements. (0-1 pts).           |

### Paper

Students should write a research paper about their project as if they were submitting it to a conference for publication. The paper should follow the [LNCS format](http://www.springer.com/computer/lncs?SGWID=0-164-6-793341-0), be at most 5 pages long, and include sections on the **introduction, data, approach** (including design, technical considerations, development, and evaluation), **system, related work, conclusions,** and **references**. Each paper should be clearly written, concise, and organized professionally. **Overleaf** is required for writing the paper, and students may also link the paper on their project website if they choose.

| Category                            | Sophisticated (4-5 pts)                                                                                                                                                                                                                                                   | Competent (2-3 pts)                                                                                                                                                                                | Needs work (0-1 pts)                                                                                                                                                               |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Clarity of Exposition**     | The paper is exceptionally clear, concise, and logically organized. Language is professional and effectively communicates complex ideas. Figures, tables, and captions are well-integrated and enhance comprehension.                                                     | The paper is understandable but may lack conciseness or logical flow. Language is generally clear but may include minor issues. Figures and tables are present but may not fully support the text. | The paper is difficult to follow, poorly organized, and contains multiple unclear sentences. Figures and tables may be missing or confusing.                                       |
| **Quality of References**     | Relevant, high-quality references are used to support the project, providing strong connections to existing research. All references are properly cited in LNCS format.                                                                                                   | References are present but may lack relevance or completeness. Some formatting errors are present.                                                                                                 | References are minimal or inappropriate. Significant formatting errors are present, showing little attention to citation guidelines.                                               |
| **Method**                    | The approach section provides a thorough description of the methods and rationale, clearly explaining design decisions and technical considerations. Development and evaluation processes are detailed and demonstrate an understanding of data visualization principles. | The approach section is present but lacks depth in explaining design or technical considerations. Development and evaluation are described but may lack clarity.                                   | Methods are vaguely described or missing, with limited explanation of design and technical aspects. The section does not demonstrate an understanding of visualization principles. |
| **Experiment and Validation** | Experiments are well-designed, with appropriate analysis of results. Validation is thorough, and results are presented with clarity and critical reflection on findings and limitations.                                                                                  | Experiments and validation are present but may lack rigor or depth. Results are described but lack detailed analysis.                                                                              | Experiments and validation are minimal or missing, with little to no analysis of results. Findings may lack relevance or be unclear.                                               |

### Video

Students should produce a 5-minute (or less) video of their demo and upload it to YouTube. The video should present the most important aspects of the project and demonstrate the most important features. Optionally, the video can be integrated in the website.

| Level         | Description                                                                                                                                                       |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sophisticated | Video is well produced, presents the most important aspects of the project well and demonstrate the most important features well. (4-5 pts).                      |
| Competent     | Video is not well produced, does not present the most important aspects of the project well and does not demonstrate the most important features well. (2-3 pts). |
| Needs work    | Video is not well produced, does not present the most important aspects of the project and does not demonstrate the most important features. (0-1 pts).           |
