<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Commit Message Requirement

After completing any task, every agent MUST include a professional commit message recommendation at the end of its final response.

The recommended message must accurately and concisely describe the completed change using the repository's commit style. Do not create a commit or push changes automatically unless the user explicitly requests it. 

## Change Description Requirement

After completing any task that changes files, every agent MUST include a clear Arabic description of the completed changes in its final response.

The description must be suitable for an external client report and must identify:

- What was changed, in clear and non-technical language where possible.
- Which file or files were changed, using their paths.
- The purpose or user-facing effect of each change when it is known.

If the agent made the changes, it MUST provide this Arabic description automatically after finishing the task. If the user made the changes themselves, the agent MUST provide the same type of Arabic description when the user asks what was changed. The description must cover the actual changes found in the files, not only repeat the task request.


