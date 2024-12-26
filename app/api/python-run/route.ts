import { NextResponse } from 'next/server'
import { PythonShell } from 'python-shell'

export async function POST(req: Request) {
  const { code } = await req.json()

  try {
    const result = await PythonShell.runString(code)
    return NextResponse.json({ output: result.join('\n') })
  } catch (error) {
    return NextResponse.json({ output: (error as Error).message }, { status: 500 })
  }
}

