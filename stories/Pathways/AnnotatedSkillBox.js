// AnnotatedSkillBox.js
import './annotatedskillbox.css';

export const AnnotatedSkillBox = ({}) => {
  return `
  
  <table align="center" class="instructional-content" style="border: 25px solid #E3ECF6; background-color: #E3ECF6; width: 100%; max-width: 800px;">
  <tbody>
    <tr>
      <td>
        <div style="border-bottom: solid .2em #116e9b; padding-bottom: calc(.005*var(--contentMaxWidth)); ">
          <div style="font-family: Oswald; font-size: 1.5em !important; color: #116e9b; display: inline-block;">
            <div style="width:100%; height: .35em; background-color: #116e9b;">&#160;
            </div>
            <div style="padding-left: 0.36em; padding-right: 0.57em; text-transform: uppercase;"><strong>GRAMMAR FOR SPEAKING</strong>
            </div>
          </div>
          <p style="width: 100%; display: block; padding-left: 0.45em; font-size: calc(1.2* var(--lo-font-size)) !important;"><strong>Adjective Clauses</strong>
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <p>Adjective clauses describe a noun&#8212;just as adjectives do. Notice how we can combine two simple sentences to form a complex sentence by using an adjective clause.</span>
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding-left: 40px;">
        <p class="noto-mono"><em>Rosa has a horse. The horse is nine years old.</em></span>
        </p>
        <p class="noto-mono"><em>Rosa has a horse <strong>that is nine years old</strong>. </em></span>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>A relative pronoun replaces the noun in an adjective clause. If it replaces a subject, use <em>who </em>or <em>that </em>for people and <em>that </em>or <em>which </em>for animals or things.</span>
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding-left: 40px;">
        <div class="left">
          <p class="noto-mono" style="color: #116e9b;">
            &#160;&#160;&#160;&#160;&#160;&#160; &#160;&#160;&#160;&#160; &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
          </p>
          <p class="noto-mono" style="margin-bottom: .5em !important;"><em>People need coordination.</em></span>
          </p>
        </div>
        <div class="right">
          <p class="noto-mono" style="color: #116e9b;">
            subject&#160;verb
          </p>
          <p class="noto-mono" style="margin-bottom: .5em  !important;">&#160;<em><u>They</u>&#160;perform in charreadas.</em></span>
          </p>
        </div>
        <!--If using em units to maintain scaling, calculate the character width % of the font size. With noto sans mono at 80% condensed at 16px, each character is 8.7px wide, or .54em (54% of 16). Every other size will scale accordingly-->

        <!-- "subject" is aligned with "who" in the textbook, which is 7 characters in. .54em * 7 characters = 3.78em -->
        <p class="noto-mono" style="color:#116e9b; margin-top: .6em;"><span style="margin-left: 3.78em; text-wrap: no-wrap;">subject</span></p>
        <!-- using this method you can "nudge" in between whole letter increments, or center a word over another word -->
        <p class="noto-mono" style="color:#116e9b;"><span style="margin-left: 2.43em; text-wrap: no-wrap;">prounoun&#160;verb</span></p>
        <p class="noto-mono" style=""><em>People</em> <strong><em><u>who</u> perform in</em> charreadas</strong> <em>need coordination.</em></span>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>If the relative pronoun replaces an object, use that or who (or whom in formal speech) for
          people and that or which for animals or things.</p>
      </td>
    </tr>
    <tr>
      <td style="padding-left: 40px">
        <div class="left">
          <p class="noto-mono" style="color: #116e9b;">
            &#160;&#160;&#160;&#160;&#160;&#160; &#160;&#160;&#160;&#160; &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
          </p>
          <p class="noto-mono" style="margin-bottom: .5em !important;"><em>People need coordination.</em></span>
          </p>
        </div>
        <div class="right">
          <p class="noto-mono" style="color: #116e9b;">
            subject&#160;verb
          </p>
          <p class="noto-mono" style="margin-bottom: .5em !important;">&#160;<em><u>They</u>&#160;perform in charreadas.</em></span>
          </p>
        </div>
        <div style="clear: both"></div>
        <div class="left">
          <p class="noto-mono" style="color: #116e9b;">
            <span style="margin-left: 4.59em">object
          </p>
          <p class="noto-mono" style="color: #116e9b;">
            <span style="margin-left: 4.32em">pronoun</span>
          </p>
          <p class="noto-mono" style="margin-bottom: .5em !important;"><em>The hats </em><strong><em><u>that</u></em> charros</strong></span>
          </p>
        </div>
        <div class="right">
          <p class="noto-mono">&#160;</p>
          <p class="noto-mono" style="color: #116e9b;">
            &#160;verb
          </p>
          <p class="noto-mono" style="margin-bottom: .5em !important;">&#160;<em><strong>wear</strong> are big.</em></span>
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <p>NOTE: In object adjective clauses, the relative pronoun is often omitted or left out.</p>
      </td>
    </tr>
    <tr>
      <td style="padding-left: 40px">
        <p class="noto-mono"><em>One skill <strong>(that) cowboys learn</strong> is independence.</em></p>
      </td>
    </tr>
  </tbody>
</table>
`;
};