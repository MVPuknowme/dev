# Codex Review

## Shared Rules
- Validation gate before processing
- Types must be enforced
- Secrets must be environment-based

## Event Schema
{
  actor: string,
  type: enum,
  severity: enum,
  reference_only: boolean,
  no_inference: boolean
}

## Notes
- Keep failure events as reference-only
- No reasoning until user input present
